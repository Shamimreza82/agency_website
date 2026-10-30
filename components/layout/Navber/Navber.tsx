import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DextopMenu";

export type TNavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; des: string; href: string }[];
};

const NAV_ITEMS: TNavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Our Services",
    href: "/services",
    submenu: [
      {
        name: "Development Services",
        des: "Scalable full-stack development, APIs, dashboards, SaaS apps, and enterprise-grade systems.",
        href: "/services/development",
      },
      {
        name: "Design Services",
        des: "UI/UX, brand identities, wireframes, and high-fidelity interactive prototypes.",
        href: "/case2",
      },
      {
        name: "AI Services",
        des: "Chatbots, automation tools, predictive analytics, and intelligent user experiences.",
        href: "/case2",
      },
      {
        name: "Other Services",
        des: "Maintenance, optimization, consultancy, and tailored digital solutions.",
        href: "/case2",
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About us", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-brand-border/50 bg-brand-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-brand-bg/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-brand-accent">SM</span> Agency
            </span>
          </Link>

          <MobileMenu NAV_ITEMS={NAV_ITEMS} />
          <DesktopMenu NAV_ITEMS={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
