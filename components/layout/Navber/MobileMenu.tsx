/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";




export default function MobileMenu({ NAV_ITEMS}: any) {
  const [open, setOpen] = useState(false);

    const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="lg:hidden">
      {/* Hamburger Button */}
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(true)}
        className="btn btn-ghost focus:outline-none active:scale-95 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
        />
      )}

      {/* Sliding Drawer */}
      <aside
        className={`
    fixed top-0 right-0 h-full w-72 p-6 z-50
    bg-black/95 backdrop-blur-xl    
    border-l border-white/10 shadow-xl
    transition-transform duration-300 ease-[cubic-bezier(.25,.8,.25,1)]
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* Close Button */}
        <button
          aria-label="Close Menu"
          onClick={() => setOpen(false)}
          className="mb-6 focus:outline-none active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
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
        <ul className="space-y-4">
          {NAV_ITEMS.map((item: any) =>
            item.submenu ? (
              <Submenu
                key={item.name}
                item={item}
                isActive={isActive}
                close={() => setOpen(false)}
              />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block py-2 px-2 rounded-lg transition font-medium 
                    ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }
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
                block text-center rounded-full py-3 font-semibold text-black 
                bg-gradient-to-r from-primary to-primary/80
                hover:brightness-110 active:scale-95 transition
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
function Submenu({ item, isActive, close }: any) {
  const [open, setOpen] = useState(
    item.submenu.some((sub: any) => isActive(sub.href))
  );

  return (
    <li className="group">
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full text-left py-2 px-2 rounded-lg flex justify-between items-center
          transition font-medium
          ${
            open || item.submenu.some((s: any) => isActive(s.href))
              ? "text-primary font-semibold"
              : "hover:text-primary"
          }
        `}
      >
        {item.name}
        <span
          className={`
            transform transition 
            ${open ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>

      {/* dropdown */}
      <ul
        className={`
          ml-3 mt-1 space-y-1 overflow-hidden border-l border-white/10 pl-3 
          transition-all duration-300 
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {item.submenu.map((sub: any, i: any) => (
          <li key={i}>
            <Link
              href={sub.href}
              onClick={close}
              className={`
                block py-1 px-1 rounded-md transition 
                ${
                  isActive(sub.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }
              `}
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
