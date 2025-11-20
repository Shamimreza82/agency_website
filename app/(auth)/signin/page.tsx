/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import SocialLogin from "@/components/auth/SocialLogin";

// Icons
import { MailIcon, LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const FormInput = ({ icon: Icon, id, ...props }: any) => (
  <div className="relative">
    <label htmlFor={id} className="sr-only">{props.placeholder}</label>
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    <input
      id={id}
      {...props}
      className={`
        pl-12 pr-4 py-3 w-full
        bg-[#0f1115]/70 border border-[#1c1f26]
        rounded-xl text-gray-200 text-base
        shadow-inner shadow-black/20
        focus:outline-none focus:ring-2 focus:ring-[#02FF95]/60
        transition-all duration-300
        ${props.className}
      `}
    />
  </div>
);

export default function SignInPage() {
  const { status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p className="text-center text-white"><Spinner/></p>;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok) router.push("/dashboard");
    else toast.error(res?.error ?? "Invalid credentials");
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-[#0c1015] relative">

      {/* Background Grid + Glow */}
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02FF95]/5 to-transparent"></div>

      {/* Glassmorphism Card */}
      <div
        className="relative w-full max-w-lg p-8 md:p-10 rounded-2xl  
        bg-[#111418]/80 backdrop-blur-xl shadow-2xl border border-white/10"
      >
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Sign In</h2>
          <p className="text-gray-400 mt-2">Access your dashboard</p>
        </header>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          
          <FormInput
            id="email"
            type="email"
            placeholder="Your Email"
            icon={MailIcon}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />

          <FormInput
            id="password"
            type="password"
            placeholder="Password"
            icon={LockIcon}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            disabled={loading}
           
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-1/3 border-t border-white/10" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="w-1/3 border-t border-white/10" />
        </div>

        {/* Social Login */}
        <div className="mt-4">
          <SocialLogin provider="google"  />
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#02FF95] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}
