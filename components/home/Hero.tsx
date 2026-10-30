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
  transition: { duration: 0.6 } as const,
};

export default function Hero() {
  return (
    <section className="relative bg-brand-bg text-white min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeUp}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text column */}
          <div className="lg:pr-16">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-balance">
              Websites and web applications built to grow your business.
            </h1>
            <p className="text-brand-muted-fg text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              We design websites and build web applications — from landing pages
              to full-stack platforms — then launch them in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/book-a-call">
                <button className="w-full sm:w-auto flex items-center justify-center bg-brand-accent text-brand-accent-fg font-semibold px-8 py-4 rounded-xl text-base transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50">
                  Start a project
                </button>
              </Link>
              <Link href="/projects">
                <button className="w-full sm:w-auto flex items-center justify-center border border-brand-border bg-transparent text-white font-semibold px-8 py-4 rounded-xl text-base transition hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-border/50">
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[560px] rounded-3xl overflow-hidden border border-brand-border/50 bg-brand-surface shadow-2xl"
            >
              <Image
                src="/images/hero.jpg"
                alt="Agency work preview"
                className="w-full h-full object-cover"
                width={800}
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
