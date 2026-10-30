"use client";

import Image from "next/image";

const projects = [
  { name: "E‑commerce platform", image: "/images/hero.jpg" },
  { name: "SaaS dashboard", image: "/images/about-1.jpg" },
  { name: "Brand website", image: "/images/hero.jpg" },
  { name: "Landing page", image: "/images/about-1.jpg" },
  { name: "Member portal", image: "/images/hero.jpg" },
];

export default function ProofRow() {
  return (
    <section className="bg-brand-surface border-y border-brand-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-muted-fg text-sm font-semibold mb-8 tracking-wider">
          Selected work
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl overflow-hidden border border-brand-border/50 bg-brand-bg aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
