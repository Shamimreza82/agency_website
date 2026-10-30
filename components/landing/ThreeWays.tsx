"use client";

import Link from "next/link";

type Way = {
  title: string;
  items: { title: string; href: string }[];
};

const WAYS: Way[] = [
  {
    title: "Get the information you need",
    items: [
      { title: "Collect information from any website", href: "/services/web-scraping" },
      { title: "All your data, cleaned, in one place", href: "/services/data-pipelines" },
      { title: "Monitoring & alerts, fixed if a website changes", href: "/services/maintenance" },
    ],
  },
  {
    title: "Find more customers",
    items: [
      { title: "Get a list of potential customers", href: "/services/b2b-lead-lists" },
      { title: "AI agents that research leads for you", href: "/services/ai-agent-development" },
      { title: "A smart assistant that answers your customers 24/7", href: "/services/ai-chatbots" },
    ],
  },
  {
    title: "Stop doing it by hand, or build your own product",
    items: [
      { title: "Build your own SaaS product, from MVP to paying users", href: "/services/saas-development" },
      { title: "Custom APIs that connect your systems and partners", href: "/services/api-development" },
      { title: "AI that answers from your own documents", href: "/services/rag-knowledge-bases" },
    ],
  },
];

export default function ThreeWays() {
  return (
    <section style={{ padding: "80px 20px", borderTop: "1px solid rgb(230, 232, 235)", borderBottom: "1px solid rgb(230, 232, 235)", background: "rgb(255, 255, 255)" }}>
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
            Three ways we save you time
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "rgb(91, 99, 110)",
              margin: 0,
            }}
          >
            Pick one, or let us handle all three.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {WAYS.map((way) => (
            <div
              key={way.title}
              style={{
                padding: "32px",
                borderRadius: "20px",
                border: "1px solid rgb(230, 232, 235)",
                background: "rgb(255, 255, 255)",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 16px 0",
                  color: "rgb(24, 32, 43)",
                }}
              >
                {way.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {way.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      color: "rgb(91, 99, 110)",
                      textDecoration: "none",
                      fontSize: "15px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgb(24, 32, 43)",
                        color: "rgb(255, 255, 255)",
                        fontSize: "11px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
