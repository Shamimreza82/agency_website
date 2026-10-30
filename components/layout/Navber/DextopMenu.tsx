"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const chevron = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      opacity: 0.7,
      transform: "rotate(0deg)",
      transition: "transform 0.25s",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

type DropdownSection = {
  title: string;
  items: {
    name: string;
    des: string;
    popular: boolean;
    href: string;
  }[];
};

const SERVICES_SECTIONS: DropdownSection[] = [
  {
    title: "Data & products",
    items: [
      {
        name: "Web scraping",
        des: "Any site, structured on schedule.",
        popular: true,
        href: "/services/web-scraping",
      },
      {
        name: "Workflow automation",
        des: "n8n, Make & custom Python.",
        popular: false,
        href: "/services/workflow-automation",
      },
      {
        name: "AI agent development",
        des: "Agents that do real work.",
        popular: true,
        href: "/services/ai-agent-development",
      },
      {
        name: "SaaS development",
        des: "MVP to production.",
        popular: true,
        href: "/services/saas-development",
      },
    ],
  },
  {
    title: "Real estate & leads",
    items: [
      {
        name: "Property listings",
        des: "Zillow, Realtor, Redfin.",
        popular: true,
        href: "/services/real-estate-data-scraping",
      },
      {
        name: "Owner leads",
        des: "FSBO and new listings.",
        popular: false,
        href: "/services/real-estate-leads",
      },
      {
        name: "B2B lead lists",
        des: "Decision-makers, verified emails.",
        popular: true,
        href: "/services/b2b-lead-lists",
      },
      {
        name: "Google Maps leads",
        des: "Phones, emails, ratings.",
        popular: false,
        href: "/services/google-maps-leads",
      },
    ],
  },
];

const MORE_SECTIONS = [
  { name: "Work", des: "Projects and results", href: "/work" },
  { name: "About", des: "Who we are and how we work", href: "/about" },
  { name: "Team", des: "The people behind SM Agency", href: "/team" },
  { name: "Industries", des: "Retail, B2B, real estate & more", href: "/industries" },
  { name: "Blog", des: "Notes on scraping & automation", href: "/blog" },
  { name: "FAQs", des: "Answers before you ask", href: "/faq" },
  { name: "Pricing", des: "Fixed builds or monthly plans", href: "/pricing" },
  { name: "Contact", des: "Tell us about your project", href: "/contact" },
];

export default function DesktopMenu() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkStyle = {
    color: "rgb(213, 217, 222)",
    padding: "9px 15px",
    borderRadius: "999px",
    transition: "background 0.2s, color 0.2s",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "-0.005em",
    minWidth: "0",
    display: "flex",
    alignItems: "center",
    gap: "2px",
  } as React.CSSProperties;

  const buttonStyle = {
    cursor: "pointer",
    border: "0",
    background: "transparent",
    font: "inherit",
    padding: "9px 13px 9px 15px",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "rgb(213, 217, 222)",
    transition: "background 0.2s, color 0.2s",
    minWidth: "0",
  } as React.CSSProperties;

  const panelStyle = {
    position: "fixed",
    left: "50%",
    top: "76px",
    transform: "translateX(-50%) translateY(-8px) scale(0.98)",
    transformOrigin: "center top",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.22s, transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0.32s",
    width: "min(720px, calc(100vw - 32px))",
    maxHeight: "calc(100vh - 96px)",
    overflowY: "auto",
    overscrollBehavior: "contain",
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    overflow: "hidden",
  } as React.CSSProperties;

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    borderRight: "1px solid rgb(238, 240, 242)",
  } as React.CSSProperties;

  const headerStyle = {
    padding: "10px 18px",
    fontSize: "12px",
    color: "rgb(91, 99, 110)",
    borderBottom: "1px solid rgb(238, 240, 242)",
    background: "rgb(247, 248, 249)",
  } as React.CSSProperties;

  const itemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    whiteSpace: "normal",
    padding: "12px 18px",
    borderBottom: "1px solid rgb(238, 240, 242)",
    color: "rgb(24, 32, 43)",
    textDecoration: "none",
  } as React.CSSProperties;

  const iconWrapperStyle = {
    flex: "0 0 auto",
    marginTop: "2px",
  } as React.CSSProperties;

  const textWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    minWidth: "0",
  } as React.CSSProperties;

  const nameStyle = {
    fontSize: "14.5px",
    fontWeight: 500,
    lineHeight: 1.3,
  } as React.CSSProperties;

  const popularBadgeStyle = {
    display: "inline-block",
    marginLeft: "8px",
    verticalAlign: "1px",
    fontSize: "11px",
    fontWeight: 500,
    background: "rgb(238, 240, 242)",
    color: "rgb(24, 32, 43)",
    padding: "2px 8px",
    borderRadius: "999px",
    lineHeight: 1.4,
  } as React.CSSProperties;

  const descStyle = {
    fontSize: "13px",
    lineHeight: 1.35,
    color: "rgb(91, 99, 110)",
  } as React.CSSProperties;

  const allServicesBtnStyle = {
    marginTop: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "15px",
    borderRadius: "12px",
    background: "rgb(24, 32, 43)",
    color: "rgb(255, 255, 255)",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
  } as React.CSSProperties;

  const moreItemStyle = {
    display: "flex",
    gap: "14px",
    padding: "18px 20px",
    borderBottom: "1px solid rgb(238, 240, 242)",
    borderRight: "1px solid rgb(238, 240, 242)",
    color: "rgb(24, 32, 43)",
    textDecoration: "none",
  } as React.CSSProperties;

  const moreIconStyle = {
    flex: "0 0 auto",
    marginTop: "2px",
    width: "20px",
    height: "20px",
  } as React.CSSProperties;

  const moreTextWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  } as React.CSSProperties;

  const moreName = {
    fontSize: "15px",
    fontWeight: 500,
  } as React.CSSProperties;

  const moreDes = {
    fontSize: "13px",
    color: "rgb(91, 99, 110)",
  } as React.CSSProperties;

  const serviceIcons: Record<string, string> = {
    "web-scraping": "M4 7h16M4 12h10M4 17h7M16 15l3 2-3 2",
    "workflow-automation": "M13 3L5 14h6l-1 7 8-11h-6z",
    "ai-agent-development":
      "M12 3v3M8 6h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zM9.5 11.5h.01M14.5 11.5h.01M9.5 15h5M2 12h3M19 12h3",
    "saas-development": "M3 5h18v11H3zM8 20h8M12 16v4",
    "real-estate-data-scraping": "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
    "real-estate-leads": "M15 7a4 4 0 1 1-4 4M11 11l-8 8M6 16l2 2",
    "b2b-lead-lists": "M3 21V8l9-5 9 5v13M9 21v-6h6v6",
    "google-maps-leads": "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  };

  const moreIcons: Record<string, string> = {
    work: "M4 5h16v14H4zM4 9h16M9 5v4",
    about: "M12 8h.01M11 12h1v5h1M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    team:
      "M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM3 21c1.2-3.6 4.6-6 9-6s7.8 2.4 9 6M18 4.5a3.5 3.5 0 0 1 0 6.5M21.5 19c-.5-1.8-1.6-3.2-3-4",
    industries: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    blog: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5",
    faqs: "M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    pricing: "M3 12V4h8l10 10-8 8zM7.5 7.5h.01",
    contact: "M21 3L10 14M21 3l-7 18-4-7-7-4z",
  };

  return (
    <div className="hidden lg:flex items-center gap-5">
      {/* Portfolio link */}
      <Link
        href="/portfolio"
        aria-current="false"
        style={linkStyle}
      >
        Portfolio
      </Link>

      {/* Services dropdown */}
      <div className="relative group">
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setServicesOpen((o) => !o)}
        >
          Services {chevron}
        </button>
        <div
          ref={servicesRef}
          style={servicesOpen ? { ...panelStyle, opacity: 1, visibility: "visible", transform: "translateX(-50%) translateY(0px) scale(1)" } : panelStyle}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div style={triangleStyle} />
          <div style={contentStyle}>
            {SERVICES_SECTIONS.map((section) => (
              <div key={section.title} style={columnStyle}>
                <div style={headerStyle}>{section.title}</div>
                {section.items.map((item) => {
                  const iconPath = serviceIcons[item.href.split("/").pop()!] || "";
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={itemStyle}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#18202B"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={iconWrapperStyle}
                      >
                        <path d={iconPath} />
                      </svg>
                      <span style={textWrapperStyle}>
                        <span style={nameStyle}>
                          {item.name}
                          {item.popular && (
                            <span style={popularBadgeStyle}>Popular</span>
                          )}
                        </span>
                        <span style={descStyle}>{item.des}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
            <a
              href="/services"
              style={allServicesBtnStyle}
            >
              Explore all services →
            </a>
          </div>
        </div>
      </div>

      {/* More dropdown */}
      <div className="relative group">
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setMoreOpen((o) => !o)}
        >
          More {chevron}
        </button>
        <div
          ref={moreRef}
          style={moreOpen ? { ...panelStyle, opacity: 1, visibility: "visible", transform: "translateX(-50%) translateY(0px) scale(1)" } : panelStyle}
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <div style={triangleStyle} />
          <div style={contentStyle}>
            <div style={{ ...columnStyle, borderRight: "none" }}>
              {MORE_SECTIONS.map((item) => {
                const iconPath = moreIcons[item.name.toLowerCase()] || "";
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={moreItemStyle}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#18202B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={moreIconStyle}
                    >
                      <path d={iconPath} />
                    </svg>
                    <span style={moreTextWrapper}>
                      <span style={moreName}>{item.name}</span>
                      <span style={moreDes}>{item.des}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
