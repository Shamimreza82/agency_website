"use client";

import Link from "next/link";

type Step = {
  num: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Tell us what you need.",
    desc:
      "Which information you need, or which task wastes your time. A free 30-minute call or a short message; no technical knowledge needed. You get a clear plan and a fixed price, usually within a few hours.",
  },
  {
    num: "02",
    title: "We build it and show you a sample.",
    desc:
      "You see real results first, like the first rows of your spreadsheet, so you can check it's right before we finish.",
  },
  {
    num: "03",
    title: "Results arrive automatically.",
    desc:
      "In Excel, Google Sheets or your system, on the schedule you choose. If something changes or breaks, we fix it.",
  },
];

export default function ThreeSteps() {
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
            Three simple steps
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 400px" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                border: "1px solid rgb(230, 232, 235)",
                background: "rgb(246, 247, 248)",
                aspectRatio: "16 / 9",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "rgba(24, 32, 43, 0.05)",
                }}
              />
            </div>
          </div>

          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid rgb(255, 90, 31)",
                    background: "rgba(255, 90, 31, 0.1)",
                    color: "rgb(255, 90, 31)",
                    fontSize: "18px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      margin: "0 0 6px 0",
                      color: "rgb(24, 32, 43)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.55,
                      color: "rgb(91, 99, 110)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <Link
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
            Book a free call (30 min) ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
