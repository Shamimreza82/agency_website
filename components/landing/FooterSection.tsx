"use client";

import Link from "next/link";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/bigibyte", ch: "in" },
  { label: "Facebook", href: "https://facebook.com/bigibyte", ch: "f" },
  { label: "X (Twitter)", href: "https://twitter.com/bigibyte", ch: "x" },
  { label: "Instagram", href: "https://instagram.com/thebigibyte", ch: "camera" },
  { label: "WhatsApp", href: "https://wa.me/8801861478232?text=Hi%20SM%20Agency!", ch: "phone" },
  { label: "Email", href: "mailto:info@bigibyte.com", ch: "at" },
];

const SERVICES_LINKS = [
  "Web scraping",
  "Automation",
  "SaaS development",
  "API development",
  "Lead generation",
  "Real estate data",
  "All services",
];

const COMPANY_LINKS = [
  "About",
  "Team",
  "Portfolio",
  "Work",
  "Blog",
  "FAQ",
  "Contact",
];

const LEGAL_LINKS = [
  "Privacy",
  "Terms",
  "Cookies",
  "Data protection",
  "Refunds",
  "Acceptable use",
  "RSS",
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "rgb(255, 255, 255)",
        color: "rgb(24, 32, 43)",
        borderTop: "1px solid rgb(230, 232, 235)",
        padding: "48px 20px 32px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "16px",
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: 600, color: "rgb(255, 90, 31)" }}>SM</span>
              <span style={{ fontSize: "18px", fontWeight: 600 }}>Agency</span>
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgb(91, 99, 110)",
                margin: "0 0 16px 0",
                maxWidth: "300px",
              }}
            >
              Big ideas, byte solutions. We build the tools that collect
              information, find customers and take repeated work off people&rsquo;s plates.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgb(230, 232, 235)",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(91, 99, 110)",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                  title={s.label}
                >
                  {s.ch}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                margin: "0 0 16px 0",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "rgb(91, 99, 110)",
                      textDecoration: "none",
                    }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                margin: "0 0 16px 0",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {COMPANY_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href={`/${s.toLowerCase()}`}
                    style={{
                      fontSize: "14px",
                      color: "rgb(91, 99, 110)",
                      textDecoration: "none",
                    }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                margin: "0 0 16px 0",
              }}
            >
              Connect
            </h4>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgb(91, 99, 110)",
                margin: "0 0 12px 0",
              }}
            >
              Office · Dhaka<br />
              Flat 10B, House 30/32<br />
              Road 10, Uttara Sector 15/B<br />
              Dhaka, Bangladesh<br />
              Beside Uttara Center Metro
            </p>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Uttara+Center+Metro+Station+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgb(255, 90, 31)",
                textDecoration: "underline",
              }}
            >
              Get directions ↗
            </Link>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgb(230, 232, 235)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "rgb(91, 99, 110)" }}>
            © 2026 SM Agency. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {LEGAL_LINKS.map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase().replace(" ", "-")}`}
                style={{
                  fontSize: "12px",
                  color: "rgb(91, 99, 110)",
                  textDecoration: "none",
                }}
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
