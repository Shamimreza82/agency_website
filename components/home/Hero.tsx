"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const isBrowser = typeof window !== "undefined";
const prefersReduced = isBrowser && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const fadeUp = {
  initial: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 } as const,
};

export default function Hero() {
  return (
    <section className="relative bg-brand-bg text-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeUp}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Text column */}
          <div className="lg:pr-20">
            <p className="font-display text-xl font-semibold text-brand-accent tracking-tight mb-6 uppercase">
              Digital products that grow your business
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] mb-8 text-white">
              We build websites<br />
              <span className="text-brand-accent">that actually convert.</span>
            </h1>
            <p className="text-brand-muted-fg text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Dream Team designs and builds high-performance websites and web
              applications — from landing pages to full-stack platforms — then
              launches them in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <Link href="/book-a-call">
                <button className="w-full sm:w-auto flex items-center justify-center bg-brand-accent text-black font-semibold px-10 py-5 rounded-2xl text-lg transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50">
                  Start your project
                </button>
              </Link>
              <Link href="/projects">
                <button className="w-full sm:w-auto flex items-center justify-center border border-brand-border bg-transparent text-white font-semibold px-10 py-5 rounded-2xl text-lg transition hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-border/50">
                  See our work
                </button>
              </Link>
            </div>

            <p className="text-brand-muted-fg text-sm leading-relaxed max-w-md">
              15+ websites and web apps shipped for ambitious teams.
            </p>
          </div>

          {/* Image column (desktop only) */}
          <div className="hidden lg:block">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[600px] rounded-3xl overflow-hidden border border-brand-border/50 bg-brand-surface shadow-2xl"
            >
              <Image
                src="/images/hero.jpg"
                alt="Agency work preview"
                className="w-full h-full object-cover"
                width={900}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton />
    </section>
  );
}
