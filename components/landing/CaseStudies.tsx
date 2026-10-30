"use client";

import Link from "next/link";
import Image from "next/image";

type CaseStudy = {
  tag: string;
  title: string;
  bigNumber: string;
  bigLabel: string;
  smallNumber: string;
  smallLabel: string;
  tech: string;
  before: string;
  after: string;
  image: string;
  alt: string;
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    tag: "Real estate",
    title: "$18k in monthly revenue within six months",
    bigNumber: "1.2k",
    bigLabel: "Active users",
    smallNumber: "$18k",
    smallLabel: "Monthly revenue at 6 months",
    tech: "SaaS · React, FastAPI, PostgreSQL",
    before: "Useful property data, but no product people could sign up for.",
    after: "A subscription website with log-in, payments and dashboards.",
    image: "https://images.bigibyte.com/cdn-cgi/image/width=800,height=500,fit=cover,quality=80,format=auto/projects/project-real-estate-listings-map.webp",
    alt: "Real estate listings on an interactive map",
    href: "/work",
  },
  {
    tag: "E-commerce",
    title: "Tracks 2.1M products daily at 99.6% success",
    bigNumber: "2.1M",
    bigLabel: "Products tracked",
    smallNumber: "99.6%",
    smallLabel: "Success rate",
    tech: "Web scraping · Python, Playwright, BigQuery",
    before: "The team checked competitor websites by hand and always reacted a week late.",
    after: "Prices from 400 online stores arrive in their reports every day, automatically.",
    image: "https://images.bigibyte.com/cdn-cgi/image/width=800,height=500,fit=cover,quality=80,format=auto/projects/project-competitor-pricing-heatmap.webp",
    alt: "Competitor pricing heatmap",
    href: "/work",
  },
  {
    tag: "Sales teams",
    title: "Saves the sales team 30 hours every week",
    bigNumber: "30h",
    bigLabel: "Hours saved each week",
    smallNumber: "4×",
    smallLabel: "More leads",
    tech: "Automation · n8n, Python, HubSpot",
    before: "Reps spent their mornings searching the web for who to contact.",
    after: "New contacts are found, checked and added to HubSpot automatically.",
    image: "https://images.bigibyte.com/cdn-cgi/image/width=800,height=500,fit=cover,quality=80,format=auto/projects/project-email-extraction-crm-workflow.webp",
    alt: "Email extraction to CRM workflow",
    href: "/work",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="work"
      style={{
        padding: "80px 20px",
        borderTop: "1px solid rgb(230, 232, 235)",
        borderBottom: "1px solid rgb(230, 232, 235)",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "8px", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: 0,
              color: "rgb(24, 32, 43)",
            }}
          >
            What this looks like in real life
          </h2>
          <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.55, color: "rgb(91, 99, 110)" }}>
            Real projects, real results.
          </p>
          <Link
            href="/work"
            style={{
              marginTop: "12px",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgb(24, 32, 43)",
              textDecoration: "underline",
            }}
          >
            See all our work →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.tag}
              href={cs.href}
              style={{
                display: "block",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid rgb(230, 232, 235)",
                background: "rgb(255, 255, 255)",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={cs.image}
                  alt={cs.alt}
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1)", transformOrigin: "center", transition: "transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)" }}
                  width={800}
                  height={500}
                  priority
                />
              </div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11.5px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgb(24, 32, 43)",
                  background: "rgba(255, 255, 255, 0.9)",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  marginBottom: "12px",
                }}
              >
                {cs.tag}
              </span>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 12px 0",
                  color: "rgb(24, 32, 43)",
                }}
              >
                {cs.title}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: 700,
                      color: "rgb(24, 32, 43)",
                    }}
                  >
                    {cs.bigNumber}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      color: "rgb(91, 99, 110)",
                    }}
                  >
                    {cs.bigLabel}
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: 700,
                      color: "rgb(24, 32, 43)",
                    }}
                  >
                    {cs.smallNumber}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      color: "rgb(91, 99, 110)",
                    }}
                  >
                    {cs.smallLabel}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "rgb(91, 99, 110)",
                  margin: "0 0 12px 0",
                }}
              >
                {cs.tech}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(24, 32, 43)",
                  margin: 0,
                }}
              >
                {cs.before}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
