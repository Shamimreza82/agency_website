"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      number: "1 — Discovery",
      title: "We learn about your business, goals, and customers.",
    },
    {
      number: "2 — Planning",
      title: "We create a project roadmap with timeline and deliverables.",
    },
    {
      number: "3 — Design",
      title: "UI/UX, wireframes, brand direction, and prototypes.",
    },
    {
      number: "4 — Development",
      title: "Frontend, backend, full-stack functionality.",
    },
    {
      number: "5 — Launch",
      title: "Deployment, optimization, performance testing.",
    },
    {
      number: "6 — Support",
      title: "We stay with you for updates, improvements, and scaling.",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#0B0F13] text-white py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute inset-0 bg-gradient-to-b to-[#0B1926] from-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b to-[#0B1926] from-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl font-black mb-20"
        >
          Our <span className="text-primary drop-shadow-lg">Process</span>
        </motion.h1>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#02FF95] to-transparent opacity-40" />

          <div className="grid gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group pl-16 md:pl-20"
              >
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 
                hover:border-[#02FF95]/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] 
                hover:shadow-[0_0_35px_rgba(2,255,149,0.2)] hover:bg-white/[0.06]">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[#0B0F13] border border-[#02FF95] shadow-[0_0_12px_#02FF95]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#02FF95] tracking-wide">
                    {step.number}
                  </h3>

                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {step.title}
                  </p>

                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#02FF95] group-hover:translate-x-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
