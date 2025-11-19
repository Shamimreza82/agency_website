import { prisma } from "@/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      verifyToken: token,
      verifyExpire: { gt: new Date() },
    },
  });

  if (!user) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_API_URL}/?verified=invali`);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: true,
      verifyToken: null,
      verifyExpire: null,
    },
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_API_URL}/?verified=success`);
}
