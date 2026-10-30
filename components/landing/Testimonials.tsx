"use client";

import Link from "next/link";

type Testimonial = {
  name: string;
  role: string;
  stars: number;
  review: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aundre Dudley",
    role: "National Manager of Solution Architects · Dual CCIE #29014",
    stars: 5,
    review:
      "He walked me through exactly how a scraper could meet my needs, helped me choose the right toolset, and delivered on time and within budget. I strongly recommend him.",
  },
  {
    name: "Habib F.",
    role: "Verified client · Fiverr",
    stars: 4.7,
    review:
      "Kawsar did an excellent job developing a Python script to scrape real estate data with custom filters and automated scheduling.",
  },
  {
    name: "Drew H.",
    role: "Verified client · Fiverr",
    stars: 5,
    review:
      "Kawsar was excellent to work with. He understood what I was looking for and proactively suggested ideas.",
  },
  {
    name: "gaddcorp",
    role: "Verified client · Fiverr",
    stars: 5,
    review:
      "Kawsar is literally the best of the best! He took on a massive project and completed it against all odds.",
  },
  {
    name: "Pedrinho",
    role: "Verified client · Fiverr",
    stars: 5,
    review: "Kawsar truly exceeded my expectations with his professional and detail-oriented work.",
  },
  {
    name: "T. J. Thorne",
    role: "Verified Fiverr client · 5 / 5",
    stars: 5,
    review:
      "Kawsar extracted over 15 million lines of data and leads for me. Without a doubt, the most skilled data freelancer I've ever worked with. I'd give him 100 stars if Fiverr let me.",
  },
  {
    name: "Ryan Jones",
    role: "CEO / President, RBS Data Inc",
    stars: 5,
    review:
      "Kawsar is instrumental in our success with our API developments. His knowledge base is incredible. I haven’t seen anyone in my 20+ years in development with such a skill set.",
  },
];

const stars = (n: number) => "★".repeat(Math.floor(n)) + (n % 1 >= 0.5 ? "☆" : "");

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 20px", background: "rgb(255, 255, 255)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              color: "rgb(255, 90, 31)",
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            {stars(4.9)}
            <span style={{ color: "rgb(91, 99, 110)", fontWeight: 400, fontSize: "16px", marginLeft: "6px" }}>
              4.9 average rating from clients worldwide.
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: 0,
              color: "rgb(24, 32, 43)",
            }}
          >
            What clients say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ padding: "24px", borderRadius: "20px", border: "1px solid rgb(230, 232, 235)", background: "rgb(255, 255, 255)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "16px" }}>
                <span style={{ color: "rgb(255, 90, 31)", fontSize: "20px", fontWeight: 700 }}>{stars(t.stars)}</span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgb(91, 99, 110)",
                  margin: "0 0 20px 0",
                  fontStyle: "italic",
                }}
              >
                “{t.review}”
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgb(230, 232, 235)",
                    background: "rgb(255, 255, 255)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgb(255, 90, 31)",
                  }}
                >
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "rgb(24, 32, 43)" }}>
                    {t.name}
                  </p>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "rgb(91, 99, 110)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link
            href="/work"
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "rgb(24, 32, 43)",
              textDecoration: "underline",
            }}
          >
            See more reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
