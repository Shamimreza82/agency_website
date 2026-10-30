"use client";

const TOOL_ROW_1 = ["Excel", "Google Sheets", "HubSpot", "Airtable", "Notion"];
const TOOL_ROW_2 = [
  "Apify",
  "Python",
  "TypeScript",
  "Node.js",
  "Puppeteer",
  "Selenium",
  "Scrapy",
  "n8n",
  "Make",
  "Zapier",
  "Google Sheets",
  "Airtable",
  "Notion",
];
const TOOL_ROW_3 = [
  "Next.js",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Redis",
  "Docker",
  "Google Cloud",
  "Cloudflare",
  "Vercel",
  "Stripe",
  "HubSpot",
  "GitHub",
];

export default function ToolsStack() {
  return (
    <section style={{ padding: "80px 20px", background: "rgb(255, 255, 255)" }}>
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
            Works with the tools you already use
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "rgb(91, 99, 110)",
              margin: 0,
            }}
          >
            Excel, Google Sheets, HubSpot, Airtable, Notion and more. No need to
            learn anything new.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[TOOL_ROW_1, TOOL_ROW_2, TOOL_ROW_3].map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {row.map((tool) => (
                <span
                  key={tool}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgb(230, 232, 235)",
                    background: "rgb(246, 247, 248)",
                    color: "rgb(91, 99, 110)",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
