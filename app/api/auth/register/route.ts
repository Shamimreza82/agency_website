
import { prisma } from "@/lib/config/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendEmail } from "@/utile/sendEmail";
import { emailVarificationTemplate } from "@/utile/email_template/emailVarification";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name, phone } = body;



    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const existing = await prisma.user.findFirst({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

   // generate token
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyExpire = new Date(Date.now() + 1000 * 60 * 30); // expires in 30 minutes

    const user = await prisma.user.create({
      data: { email, password, name, phone, verifyToken, verifyExpire },
    });

    const verifyUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/verify-email?token=${user?.verifyToken}`;


    await sendEmail(user?.email, "Email Varification", emailVarificationTemplate(verifyUrl) )
     return NextResponse.json(
      { 
        success: true,
        message: "Registration successful. Check your email to verify your account."   
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
