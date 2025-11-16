"use client";

import Hero from "@/components/home/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/layout/Footer";

import dynamic from "next/dynamic";

const LocoWrapper = dynamic(() => import("@/components/LocoWrapper"), {
  ssr: false,
});

export default function Home() {
  return (
    <LocoWrapper>
      <Hero />
      <AboutUs />
      <Footer />
    </LocoWrapper>
  );
}
