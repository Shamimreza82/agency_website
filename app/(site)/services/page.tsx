import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Dream Team",
  description:
    "Dream Team offers web design, web development, UI/UX design, and full-stack development services. We build high-performance websites and web applications that grow your business.",
  openGraph: {
    title: "Services | Dream Team",
    description:
      "Professional web design and development services for ambitious teams.",
    url: "https://www.dreamteam.agency/services",
    siteName: "Dream Team",
    type: "website",
  },
};

const services = [
  {
    title: "Web Design",
    description:
      "Distinctive visual identities, UI/UX design, and high-fidelity prototypes built around your brand — not templates.",
    href: "/services/design",
  },
  {
    title: "Web Development",
    description:
      "Frontend, backend, and full-stack development with Next.js, React, and Node.js — fast, scalable, production-ready code.",
    href: "/services/development",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed to turn visitors into customers, launched in days, not months.",
    href: "/book-a-call",
  },
  {
    title: "SaaS Products",
    description:
      "End-to-end SaaS platforms — from MVP to multi-tenant architecture — with authentication, payments, and dashboards.",
    href: "/book-a-call",
  },
  {
    title: "E-commerce",
    description:
      "Optimized online stores with seamless checkout flows, product catalogs, and inventory management built to sell.",
    href: "/book-a-call",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, performance monitoring, security patches, and scaling support so your site never stands still.",
    href: "/book-a-call",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="font-display text-brand-accent font-semibold tracking-tight uppercase text-sm">
            What we build
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] mt-6 mb-10">
            Services<br />
            <span className="text-brand-accent">for growing businesses.</span>
          </h2>
          <p className="text-brand-muted-fg text-lg leading-relaxed max-w-2xl mx-auto">
            From landing pages to full-stack platforms. We design and develop
            digital products that perform — and look great doing it.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group relative block rounded-3xl border border-brand-border/50 bg-brand-surface p-8 hover:border-brand-accent/40 transition-all duration-300 hover:bg-brand-surface/80"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">◆</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted-fg text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-brand-accent font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-brand-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-brand-border bg-brand-surface p-10 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-accent text-black flex items-center justify-center font-black text-2xl">
              ◆
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-brand-muted-fg text-lg mb-8">
                We&rsquo;re currently taking on new clients. Book a discovery call
                and let&rsquo;s talk about what we can build together.
              </p>
              <a href="/book-a-call" className="inline-flex items-center justify-center bg-brand-accent text-black font-semibold px-10 py-5 rounded-2xl text-lg transition hover:opacity-90 active:scale-95">
                Start your project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
