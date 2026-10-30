import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Services | Dream Team",
  description:
    "Dream Team offers web development, full-stack development, SaaS development, and e-commerce development. Fast, scalable, production-ready code.",
  openGraph: {
    title: "Development Services | Dream Team",
    description: "Frontend, backend, and full-stack web development services.",
    url: "https://www.dreamteam.agency/services/development",
    siteName: "Dream Team",
    type: "website",
  },
};

const offerings = [
  {
    title: "Frontend Development",
    description:
      "React and Next.js frontends built for performance, accessibility, and pixel-perfect fidelity to your designs.",
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs, server-side logic, and database architecture — scalable backends that power your product.",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end development from database to UI — complete web applications built to launch and scale.",
  },
  {
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms with authentication, subscriptions, payments, and admin dashboards.",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="font-display text-brand-accent font-semibold tracking-tight uppercase text-sm">
            Development services
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black leading-[1.05] mt-6 mb-10">
            Code that<br />
            <span className="text-brand-accent">performs.</span>
          </h1>
          <p className="text-brand-muted-fg text-lg leading-relaxed max-w-2xl mx-auto">
            Fast, scalable, production-ready web applications — from frontend
            to backend and everything in between.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="rounded-3xl border border-brand-border/50 bg-brand-surface p-8 hover:border-brand-accent/40 transition-colors duration-300"
              >
                <h3 className="font-display text-xl font-bold mb-3 text-white">
                  {offering.title}
                </h3>
                <p className="text-brand-muted-fg text-sm leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-brand-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-brand-border bg-brand-surface p-10 lg:p-16 flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-accent text-black flex items-center justify-center font-black text-2xl mx-auto lg:mx-0">
              ◆
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to build?
              </h2>
              <p className="text-brand-muted-fg text-lg mb-8">
                Let&rsquo;s discuss your project and get it shipped.
              </p>
              <a href="/book-a-call" className="inline-flex items-center justify-center bg-brand-accent text-black font-semibold px-10 py-5 rounded-2xl text-lg transition hover:opacity-90 active:scale-95">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
