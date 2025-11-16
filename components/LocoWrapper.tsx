"use client";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocoWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,           // ⭐ Lower = smoother
      firefoxMultiplier: 50,     // ⭐ Fix micro-stutter on Firefox
      lerp: 0.07,                // ⭐ Main smoothness factor (0.03–0.08 BEST)
      touchMultiplier: 1.5,      // ⭐ Smooth but responsive for touch
      reloadOnContextChange: true,
    });

    // Fix layout shift after images load
    setTimeout(() => {
      scroll.update();
    }, 500);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container >
      {children}
    </div>
  );
}
