import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    phone?: string;
  }

  interface Session {
    user: User;
  }
}
