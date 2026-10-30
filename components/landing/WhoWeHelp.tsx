"use client";

import Link from "next/link";

type HelpItem = {
  title: string;
  quote: string;
  href: string;
};

const WHO_WE_HELP: HelpItem[] = [
  {
    title: "Real estate",
    quote: "I scroll listing sites every day looking for the right deal.",
    href: "/services/real-estate-data-scraping",
  },
  {
    title: "Online shops",
    quote: "I check competitor prices by hand and always find out too late.",
    href: "/services/web-scraping",
  },
  {
    title: "Marketing agencies",
    quote: "Our clients want leads and reports, and my team builds them by hand.",
    href: "/services/cold-email-lists",
  },
  {
    title: "Sales teams",
    quote: "We spend hours finding the right person to contact.",
    href: "/services/b2b-lead-lists",
  },
  {
    title: "Startups",
    quote: "I have an idea for an app, or a half-built one that keeps breaking.",
    href: "/services/saas-development",
  },
  {
    title: "Researchers & AI teams",
    quote: "I need a large, clean dataset and collecting it would take months.",
    href: "/services/ai-model-datasets",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      style={{
        padding: "80px 20px",
        borderTop: "1px solid rgb(230, 232, 235)",
        borderBottom: "1px solid rgb(230, 232, 235)",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: "0 0 16px 0",
              color: "rgb(24, 32, 43)",
            }}
          >
            Who we help
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "rgb(91, 99, 110)",
              margin: 0,
            }}
          >
            If one of these sounds like you, we have probably solved it before.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {WHO_WE_HELP.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                display: "block",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid rgb(230, 232, 235)",
                background: "rgb(255, 255, 255)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.25s ease, box-shadow 0.45s ease, transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  margin: "0 0 8px 0",
                  color: "rgb(24, 32, 43)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "rgb(91, 99, 110)",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                “{item.quote}”
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
