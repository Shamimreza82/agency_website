

/* eslint-disable @typescript-eslint/no-explicit-any */

import GoogleProvider from "next-auth/providers/google";
import { sendEmail } from "@/utile/sendEmail";
import { generatePassword } from "@/utile/generatePassword";
import { prisma } from "@/lib/config/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import { NextResponse } from "next/server";




export const authOptions: NextAuthOptions = {
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email", placeholder: "you@domain.com" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     if (!credentials?.email || !credentials?.password) return null;

    //     // Find user by email
    //     const user = await prisma.user.findFirst({
    //       where: { email: credentials.email },
    //     });

    //     // console.log(user)


    //     if (!user) return null;



    //     // verify password (bcrypt)
    //     // const isValid = await verifyPassword(credentials.password, user.password);
    //     // if (!isValid) return null;

    //     // Return a user object that will be stored in session token
    //     return {
    //       id: user.id,
    //       email: user.email,
    //       name: user.name ?? undefined,
    //       phone: user.phone ?? undefined
    //     };
    //   },
    // }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // `profile` is the OAuthProfile you saw in the debug logs
      console.log("Profile from Google:", profile, user, account);

      const isExiste = await prisma.user.findFirst({
        where: { email: profile?.email }
      })

      if(!isExiste) {
        const result = await prisma.user.create({
          data: {
            name: profile?.name || "",
            email: profile?.email || "",
            password: generatePassword(profile?.email ?? "", 8),
            phone: ""
          }
        });



        const html = `
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <tr>
    <td align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        
        <tr>
          <td style="background-color: #1a73e8; padding: 20px; border-radius: 8px 8px 0 0;" align="center">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to Our Platform!</h1>
          </td>
        </tr>

        <tr>
          <td style="padding: 30px;">
            <h2 style="color: #333333; margin-top: 0; font-size: 20px;">Hello, ${result?.name || "New User"}!</h2>
            
            <p style="color: #555555; line-height: 1.6;">Thank you for registering with us. Your account has been successfully created. We're excited to have you on board!</p>
            
            <p style="color: #555555; line-height: 1.6;"><strong>Your Account Summary:</strong></p>
            
            <ul style="list-style-type: none; padding: 0; margin: 15px 0;">
              <li style="margin-bottom: 8px; color: #333333;"><strong>Email:</strong> <span style="font-weight: bold; color: #1a73e8;">${result?.email}</span></li>
              <li style="margin-bottom: 8px; color: #333333;"><strong>Temporary Password:</strong> <span style="font-weight: bold; color: #d9534f;">${"********"}</span> (Please change this immediately)</li>
            </ul>

            <table border="0" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
              <tr>
                <td align="center" style="border-radius: 6px;" bgcolor="#1a73e8">
                  <a href="${process.env.NEXTAUTH_URL}/signin" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 12px 25px; border: 1px solid #1a73e8; display: inline-block;">
                    Log In to Your Account
                  </a>
                </td>
              </tr>
            </table>

            <p style="color: #555555; line-height: 1.6;">For your security, we strongly recommend you change your password upon your first login.</p>
          </td>
        </tr>

        <tr>
          <td style="padding: 20px 30px; border-top: 1px solid #eeeeee; text-align: center;">
            <p style="font-size: 12px; color: #aaaaaa; margin: 0;">If you did not register for this account, please ignore this email or contact support.</p>
          </td>
        </tr>
        
      </table>
    </td>
  </tr>
</table>
`


        if (profile?.email) {
          await sendEmail(profile.email, "Welcome to SM Agency! 🎉", html);
        }
        
      }
      
      return true;
    },

//     async jwt({ token, user }) {
//       console.log("ddddddddddddddddddddddddddddddd",user, token)
      
//   if (user) {
//     // first sign-in


//     token.role = user.role ?? "USER"; // default role
//   } else if (!token.role && token.email) {
//     // subsequent calls, fetch role from DB
//     const dbUser = await prisma.user.findUnique({
//       where: { email: token.email },
//     });
//     token.role = dbUser?.role ?? "user";
//   }
//   return token;
// },

//     async session({ session, user }) {
//     if (session.user) {
//       session.user.role = user.role; // now role is available in session
//     }
//     return session;
//   },
  },

  session: {
    strategy: "jwt", // or "database" if adapter used
  },

  

  pages: {
    signIn: "/auth/signin", // custom sign-in route (optional)
    error: '/auth/error' // custom error page
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };