"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const bottomLinks = ["Work", "Team", "Industries", "Blog", "FAQs"];

  const chevronRight = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5B636E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "0 0 auto" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );

  const waSvg = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ color: "rgb(21, 128, 61)" }}
    >
      <path
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"
      />
    </svg>
  );

  const drawerStyle = {
    position: "fixed",
    left: "50%",
    top: "76px",
    transform: open
      ? "translateX(-50%) translateY(0px) scale(1)"
      : "translateX(-50%) translateY(-8px) scale(0.98)",
    transformOrigin: "center top",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
    transition: "opacity 0.22s, transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0.32s",
    width: "calc(100vw - 24px)",
    maxHeight: "calc(100dvh - 92px)",
    overflowY: "auto",
    background: "rgb(243, 244, 246)",
    borderRadius: "20px",
    padding: "8px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 30px 70px",
    color: "rgb(24, 32, 43)",
  } as React.CSSProperties;

  const triangleStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "-24px",
    height: "24px",
  } as React.CSSProperties;

  const contentStyle = {
    background: "rgb(255, 255, 255)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  } as React.CSSProperties;

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "14px",
    padding: "15px 18px",
    borderBottom: "1px solid rgb(238, 240, 242)",
    color: "rgb(24, 32, 43)",
    fontSize: "17px",
    fontWeight: 500,
    textDecoration: "none",
  } as React.CSSProperties;

  const bottomSectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px 16px",
    padding: "14px 18px",
    fontSize: "14px",
  } as React.CSSProperties;

  const bottomLinkStyle = {
    color: "rgb(91, 99, 110)",
    textDecoration: "none",
  } as React.CSSProperties;

  const bookBtnStyle = {
    marginTop: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "15px",
    borderRadius: "12px",
    background: "rgb(24, 32, 43)",
    color: "rgb(255, 255, 255)",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
  } as React.CSSProperties;

  const waBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgb(225, 228, 232)",
    background: "rgb(255, 255, 255)",
    color: "rgb(24, 32, 43)",
    fontSize: "15px",
    fontWeight: 500,
    textDecoration: "none",
  } as React.CSSProperties;

  return (
    <nav className="lg:hidden">
      <button
        type="button"
        data-nav="burger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="place-items-center w-[40px] h-[40px] flex-0 auto border-0 rounded-full bg-white/10 text-white cursor-pointer"
        style={{
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

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
      )}

      <aside style={drawerStyle} onClick={(e) => e.stopPropagation()}>
        <div style={triangleStyle} />
        <div style={contentStyle}>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              style={menuItemStyle}
            >
              <span>{item.name}</span>
              {chevronRight}
            </a>
          ))}
          <div style={bottomSectionStyle}>
            {bottomLinks.map((name) => {
              const hrefMap: Record<string, string> = {
                Work: "/work",
                Team: "/team",
                Industries: "/industries",
                Blog: "/blog",
                FAQs: "/faq",
              };
              return (
                <a
                  key={name}
                  href={hrefMap[name]}
                  onClick={() => setOpen(false)}
                  style={bottomLinkStyle}
                >
                  {name}
                </a>
              );
            })}
          </div>
          <a
            href="https://cal.com/shamim-reza-pq9t65"
            target="_blank"
            rel="noopener noreferrer"
            style={bookBtnStyle}
            onClick={() => setOpen(false)}
          >
            Book a call ↗
          </a>
          <a
            href="https://wa.me/8801861478232?text=Hi%20SM%20Agency%21%20I%20found%20you%20on%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20project.%20Could%20you%20share%20how%20you%20can%20help%20and%20what%20the%20next%20steps%20are%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={waBtnStyle}
            onClick={() => setOpen(false)}
          >
            {waSvg} Chat on WhatsApp
          </a>
        </div>
      </aside>
    </nav>
  );
}
