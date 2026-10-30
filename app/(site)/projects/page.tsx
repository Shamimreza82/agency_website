import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Dream Team",
  description:
    "Explore Dream Team's portfolio of websites and web applications. From landing pages to full-stack platforms, see the digital products we've built for ambitious teams.",
  openGraph: {
    title: "Projects | Dream Team",
    description: "Our work — websites and web applications that grow businesses.",
    url: "https://www.dreamteam.agency/projects",
    siteName: "Dream Team",
    type: "website",
  },
};

const projects = [
  {
    title: "Nexa — SaaS Dashboard",
    category: "SaaS · Dashboard",
    description:
      "A full-stack analytics dashboard for a B2B SaaS platform with real-time data visualization, team management, and Stripe integration.",
    image: "/images/hero.jpg",
    href: "/book-a-call",
  },
  {
    title: "Velora — E-commerce Store",
    category: "E-commerce · Retail",
    description:
      "High-converting online store with custom product pages, seamless checkout flow, and inventory management built for scale.",
    image: "/images/about-1.jpg",
    href: "/book-a-call",
  },
  {
    title: "Lumen — Brand Website",
    category: "Web Design · Creative",
    description:
      "Distinctive brand identity and marketing website for a creative agency, featuring bold typography and custom illustrations.",
    image: "/images/hero.jpg",
    href: "/book-a-call",
  },
  {
    title: "Flow — Member Portal",
    category: "Portal · Membership",
    description:
      "Secure member portal with authentication, gated content, payment processing, and admin dashboard for a subscription business.",
    image: "/images/about-1.jpg",
    href: "/book-a-call",
  },
  {
    title: "Spark — Landing Page",
    category: "Landing Page · Startup",
    description:
      "Conversion-focused landing page for an AI startup, designed to turn visitors into beta users within days of launch.",
    image: "/images/hero.jpg",
    href: "/book-a-call",
  },
  {
    title: "Pulse — Business Website",
    category: "Web Development · Corporate",
    description:
      "Corporate website for a professional services firm with service pages, case studies, and a booking system.",
    image: "/images/about-1.jpg",
    href: "/book-a-call",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="font-display text-brand-accent font-semibold tracking-tight uppercase text-sm">
            Selected work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] mt-6 mb-10">
            Projects<br />
            <span className="text-brand-accent">we&rsquo;re proud of.</span>
          </h2>
          <p className="text-brand-muted-fg text-lg leading-relaxed max-w-2xl mx-auto">
            A selection of websites and web applications we&rsquo;ve designed and
            built for ambitious teams.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group block rounded-3xl overflow-hidden border border-brand-border/50 bg-brand-surface hover:border-brand-accent/40 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-brand-accent font-medium text-xs tracking-wide uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-muted-fg text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </a>
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
                Want to be our next project?
              </h2>
              <p className="text-brand-muted-fg text-lg mb-8">
                We&rsquo;re taking on new clients. Let&rsquo;s build something great
                together.
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
