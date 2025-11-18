"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function AnimatedTitle({ children, className = "" }: {children: React.ReactNode, className: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.8", "0 0"],
  });

  // Color transform (white → gray)
  const color = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#9ca3af"]);

  return (
    <motion.h1
      ref={ref}
      style={{ color }}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center text-4xl md:text-5xl font-black mb-4 ${className}`}
    >
      {children}
    </motion.h1>
  );
}
