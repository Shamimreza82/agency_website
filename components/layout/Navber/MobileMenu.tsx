"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; des: string; href: string }[];
};

export default function MobileMenu({
  NAV_ITEMS,
}: {
  NAV_ITEMS: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="lg:hidden">
      {/* Hamburger Button */}
      <button
        aria-label="Open Menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="btn btn-ghost focus:outline-none active:scale-95 transition p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}

      {/* Sliding Drawer */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 p-6 z-50
          bg-black/95 backdrop-blur-xl
          border-l border-brand-border shadow-xl
          transition-transform duration-300 ease-[cubic-bezier(.25,.8,.25,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          aria-label="Close Menu"
          onClick={() => setOpen(false)}
          className="mb-6 focus:outline-none active:scale-90 transition p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Items */}
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) =>
            item.submenu ? (
              <Submenu
                key={item.name}
                item={item as NavItem & {
                  submenu: NonNullable<NavItem["submenu"]>;
                }}
                close={() => setOpen(false)}
              />
            ) : (
              <li key={item.href || item.name}>
                <Link
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className={`
                    block px-3 py-2 rounded-lg transition font-medium
                    ${isActive(item.href)
                      ? "text-brand-accent font-semibold bg-white/5"
                      : "text-brand-muted-fg hover:text-white"}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}

          {/* CTA Button */}
          <li className="pt-4">
            <Link
              href="/book-a-call"
              onClick={() => setOpen(false)}
              className="
                block text-center rounded-full py-3 font-semibold text-brand-accent-fg
                bg-brand-accent hover:opacity-90 active:scale-95 transition
              "
            >
              Book a call
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
}

/* ------------------------------
      SUBMENU COMPONENT
--------------------------------*/
function Submenu({
  item,
  close,
}: {
  item: NavItem & {
    submenu: NonNullable<NavItem["submenu"]>;
  };
  close: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-3 py-2 rounded-lg flex justify-between items-center transition font-medium"
      >
        {item.name}
        <span
          className={`transform transition shrink-0 ${open ? "rotate-180" : ""}`}
        >
          <svg
            className="w-4 h-4"
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
        </span>
      </button>

      <ul
        className={`
          ml-3 mt-1 space-y-1 overflow-hidden border-l border-brand-border/10 pl-3
          transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {item.submenu.map((sub, i) => (
          <li key={i}>
            <Link
              href={sub.href}
              onClick={close}
              className="block px-3 py-1 rounded-md text-sm transition hover:text-white"
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
