// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string; // or 'admin' | 'user' if you have fixed roles
  }

  interface Session {
    user: User;
  }
}
