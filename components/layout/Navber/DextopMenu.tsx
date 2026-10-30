"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; des: string; href: string }[];
};

const ChevronDown = (
  <svg
    className="w-3 h-3 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function DesktopMenu({
  NAV_ITEMS,
}: {
  NAV_ITEMS: NavItem[];
}) {
  const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  return (
    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
      {NAV_ITEMS.map((item) => {
        if (item.submenu) {
          return (
            <div key={item.name} className="relative group">
              <button
                aria-expanded="false"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
              >
                {item.name}
                {ChevronDown}
              </button>

              <div
                className="
                  absolute left-0 top-full mt-2 w-72
                  rounded-xl border border-brand-border
                  bg-brand-surface/90 backdrop-blur-md p-3 shadow-xl
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-200
                "
              >
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-brand-surface hover:text-white"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href!}
            className={`
              px-3 py-2 rounded-lg transition-colors
              ${active
                ? "text-brand-accent font-semibold"
                : "text-brand-muted-fg hover:text-white"}
            `}
          >
            {item.name}
          </Link>
        );
      })}

      <Link
        href="/book-a-call"
        className="ml-4 px-5 py-2 rounded-full bg-brand-accent text-brand-accent-fg font-semibold text-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
      >
        Book a call
      </Link>
    </nav>
  );
}
