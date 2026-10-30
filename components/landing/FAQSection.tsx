"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "I'm not technical. Can I still work with you?",
    a:
      "Yes, most of our clients are not. You describe the problem in your own words; we handle the technical side and deliver the results to a spreadsheet, email or tool you already use.",
  },
  {
    q: "What is web scraping, in simple words?",
    a:
      "A program visits websites for you and copies the information you need, such as prices, listings or contact details, into a tidy spreadsheet. It does in minutes what would take a person days.",
  },
  {
    q: "Is it legal?",
    a:
      "We only collect publicly available information and respect privacy laws and site terms. If something looks risky, we tell you before we build.",
  },
  {
    q: "What will I actually receive?",
    a:
      "Usually a spreadsheet, a file, or new rows in your system, delivered on a schedule you choose. For bigger projects, a dashboard or your own app.",
  },
  {
    q: "How much does it cost?",
    a:
      "Small one-off jobs start from $499. You always get a fixed price before we start. Full details are on our Pricing page.",
  },
  {
    q: "What if it stops working?",
    a:
      "Every build includes monitoring & alerts. If a website changes, we fix it, usually before you notice.",
  },
  {
    q: "How fast can you start?",
    a:
      "Most projects kick off within a week. Small scrapers often ship in days.",
  },
  {
    q: "Do you work with non-technical teams?",
    a:
      "Yes, we deliver straight into Sheets, Airtable, Notion or your CRM.",
  },
  {
    q: "Who owns the code?",
    a:
      "You do. Full source and documentation are handed over at the end.",
  },
  {
    q: "Can you work under NDA?",
    a:
      "Yes, we are happy to sign your NDA before any details are shared.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "80px 20px", background: "rgb(255, 255, 255)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
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
            Everything about working with us
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "rgb(91, 99, 110)",
              margin: 0,
            }}
          >
            Still unsure? Ask us in plain English. You&rsquo;ll talk to the person who builds it.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgb(230, 232, 235)",
                  background: "rgb(255, 255, 255)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    textAlign: "left",
                    background: "transparent",
                    border: 0,
                    color: "rgb(24, 32, 43)",
                    fontSize: "16px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  <span>{faq.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B636E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flex: "0 0 auto",
                      transition: isOpen ? "transform 0.3s" : "transform 0.3s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 20px 16px 20px" }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "rgb(91, 99, 110)",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a
            href="https://cal.com/shamim-reza-pq9t65"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgb(24, 32, 43)",
              color: "rgb(255, 255, 255)",
              padding: "14px 28px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Book a call ↗
          </a>
        </div>
      </div>
    </section>
  );
}
