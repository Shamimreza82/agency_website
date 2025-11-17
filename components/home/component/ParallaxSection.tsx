"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // BG parallax
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const smoothY = useSpring(rawY, {
    stiffness: 40,
    damping: 18,
    mass: 0.3,
  });

  // Text fade-in + slight parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.img
        src="/images/about-1.jpg"
        style={{ y: smoothY }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform scale-110"
      />

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Spotlight effect for luxury glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h2 className="text-white text-7xl md:text-8xl font-extrabold drop-shadow-2xl tracking-tight">
          SM Agency
        </h2>

        <p className="mt-6 text-white/80 text-lg md:text-2xl max-w-3xl leading-relaxed backdrop-blur-sm p-4 rounded-2xl bg-white/5 shadow-lg border border-white/10">
          We create beautiful digital experiences<br />
          with next-level animations & visual craft.
        </p>

        {/* Call-to-action button */}
        <button className="mt-10 px-8 py-3 text-lg font-medium rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 text-white
          hover:bg-white/20 transition-all duration-300 shadow-xl">
          Explore Our Work
        </button>
      </motion.div>
    </section>
  );
}
