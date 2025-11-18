"use client";

import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type TSessionUser = {
  email?: string | null;
  id: string;
  image?: string | null;
  name?: string | null;
  loyaltyPoints?: number; // optional: restaurant-specific info
  lastOrder?: string; // optional: last order info
};

export default function UserProfile() {
   const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading…</p>;

  console.log(session)

  if (!session?.user) {
    return (
      <Link href="/signin">
        <Button className="font-semibold px-6 py-6 rounded-full flex-shrink-0">
          Sign In
        </Button>
      </Link>
    );
  }

  const user: TSessionUser = session.user as TSessionUser;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:scale-110 duration-200">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={40}
              height={40}
              className="rounded-full border-2 border-amber-500"
            />
          ) : (
            <div className="w-10 h-10 rounded-full  flex items-center justify-center  font-bold">
              {user.name?.[0]?.toUpperCase() || "U"}
            </div>
          )}
          {/* <div className="flex flex-col text-left">
            <span className="font-semibold text-sm">{user.name}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div> */}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-2  shadow-lg rounded-lg border">
        {/* Optional restaurant-specific info */}
        <div className="px-2 py-2 border-b mb-2">
          <p className="text-gray-700 text-sm">Loyalty Points: <span className="font-semibold text-amber-600">{user.loyaltyPoints ?? 0}</span></p>
          {user.lastOrder && (
            <p className="text-gray-500 text-xs mt-1">Last Order: {user.lastOrder}</p>
          )}
        </div>
        <DropdownMenuItem asChild className="hover:bg-amber-100 rounded-md">
          <Link href="/dashboard">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="hover:bg-amber-100 rounded-md">
          <Link href="/orders">My Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="hover:bg-amber-100 rounded-md">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
