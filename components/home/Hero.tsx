"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const isBrowser = typeof window !== "undefined";
const prefersReduced = isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const fadeUp = {
  initial: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "circOut" } as const,
};

const float = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Hero() {
  return (
    <section className="relative bg-brand-bg text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          {...float}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[120px] mix-blend-overlay"
        />
        <motion.div
          {...float}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#0B1926]/40 blur-[140px]"
        />
        <div className="absolute inset-0 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeUp}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Text column */}
          <div className="lg:pr-24">
            <div className="relative inline-block mb-8">
              <span className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent via-transparent to-transparent rounded-full blur opacity-30 animate-pulse" />
              <p className="font-display text-sm font-semibold text-brand-accent tracking-[0.15em] uppercase relative z-10">
                Creative agency &bull; Dream Team
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight">
              We build digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent">
                experiences that convert
              </span>
            </h1>
            <p className="text-brand-muted-fg text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Dream Team designs and builds high-performance websites and web
              applications — from landing pages to full-stack platforms —
              launched in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <Link href="/book-a-call">
                <button className="w-full sm:w-auto flex items-center justify-center bg-brand-accent text-black font-semibold px-10 py-5 rounded-2xl text-lg transition-all hover:shadow-[0_0_40px_rgba(2,255,149,0.4)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50">
                  Start your project
                </button>
              </Link>
              <Link href="/projects">
                <button className="w-full sm:w-auto flex items-center justify-center border border-brand-border bg-transparent text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-border/50">
                  See our work
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-brand-muted-fg text-sm">
              <div className="flex items-center gap-2 w-full sm:w-auto border-b border-brand-border pb-2">
                <span className="w-8 h-0.5 bg-brand-accent block" />
              </div>
              <p className="whitespace-nowrap">15+ websites shipped for ambitious teams</p>
            </div>
          </div>

          {/* Image column — modern glassmorphism panel */}
          <div className="hidden lg:block">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              className="relative h-[700px] rounded-[2rem] overflow-hidden border border-brand-border/40 bg-brand-surface/80 backdrop-blur-2xl shadow-2xl"
            >
              <Image
                src="/images/hero.jpg"
                alt="Agency work preview"
                className="w-full h-full object-cover object-center opacity-90 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                width={1000}
                height={700}
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-transparent to-transparent" />
              {/* Corner accent */}
              <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_20px_#02FF95]" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-white/30" />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating stat badges (modern detail) */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 lg:top-1/3 lg:left-0 lg:translate-x-0 hidden lg:block">
          <div className="flex items-center gap-12 px-8 py-6 rounded-3xl border border-brand-border/30 bg-brand-surface/60 backdrop-blur-2xl shadow-2xl">
            <div className="text-center">
              <span className="block font-display text-3xl font-black text-brand-accent">15+</span>
              <span className="block text-xs text-brand-muted-fg uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-12 bg-brand-border/30" />
            <div className="text-center">
              <span className="block font-display text-3xl font-black text-white">4.8/5</span>
              <span className="block text-xs text-brand-muted-fg uppercase tracking-wider">Client rating</span>
            </div>
            <div className="w-px h-12 bg-brand-border/30" />
            <div className="text-center">
              <span className="block font-display text-3xl font-black text-brand-accent">24h</span>
              <span className="block text-xs text-brand-muted-fg uppercase tracking-wider">Response time</span>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
}
