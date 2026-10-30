"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DesktopMenu from "./DextopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillClasses = scrolled
    ? "pointer-events-auto flex items-center gap-5 px-3 py-[6px] rounded-full bg-[#18202B]/98 backdrop-blur-[16px] border border-white/8 text-white shadow-[0_12px_34px_rgba(24,32,43,0.22),0_1px_0px_rgba(255,255,255,0.06)_inset] max-w-[900px] w-full font-poppins whitespace-nowrap transition-colors duration-300"
    : "pointer-events-auto flex items-center gap-5 px-3 py-[6px] rounded-full bg-[#18202B]/94 backdrop-blur-[16px] border border-white/8 text-white shadow-[0_12px_34px_rgba(24,32,43,0.22),0_1px_0px_rgba(255,255,255,0.06)_inset] max-w-[900px] w-full font-poppins whitespace-nowrap transition-colors duration-300";

  const overlayClasses = scrolled
    ? "fixed inset-0 z-[44] pointer-events-none transition-colors duration-300 bg-[#18202B]/10 backdrop-blur-none"
    : "fixed inset-0 z-[44] pointer-events-none transition-colors duration-300 bg-transparent backdrop-blur-none";

  return (
    <header className="sticky top-0 z-50">
      <div className={overlayClasses} />
      <nav className="relative z-50 flex justify-center px-4 pb-2">
        <div className={pillClasses}>
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white text-sm"
          >
            <span className="text-brand-accent">SM</span> Agency
          </Link>

          <DesktopMenu />

          <a
            href="https://wa.me/8801861478232?text=Hi%20SM%20Agency%21%20I%20found%20you%20on%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20project.%20Could%20you%20share%20how%20you%20can%20help%20and%20what%20the%20next%20steps%20are%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
            style={{
              position: "relative",
              isolation: "isolate",
              flex: "0 0 auto",
              width: "34px",
              height: "34px",
              borderRadius: "999px",
              display: "grid",
              placeItems: "center",
              background: "#15803D",
              color: "#FFFFFF",
              transition: "background 0.2s, transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"
              />
            </svg>
          </a>

          <a
            href="https://cal.com/shamim-reza-pq9t65"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: "0 0 auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              color: "#18202B",
              padding: "14px 18px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 0 0 4px rgba(255,255,255,0.1)",
              transition: "box-shadow 0.25s",
            }}
          >
            Book a call ↗
          </a>

          <button
            type="button"
            data-nav="burger"
            aria-label="Open menu"
            aria-expanded="false"
            style={{
              display: "none",
              placeItems: "center",
              width: "40px",
              height: "40px",
              flex: "0 0 auto",
              border: 0,
              borderRadius: "999px",
              background: "rgba(255,255,255,0.1)",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu />
    </header>
  );
}
