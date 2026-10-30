"use client";

import FooterSection from "@/components/landing/FooterSection";
import Navber from "@/components/layout/Navber/Navber";
import { ReactNode } from "react";
import { Toaster } from "sonner";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <Navber />
      {children}
      <FooterSection />
    </>
  );
};

export default LayoutProvider;
