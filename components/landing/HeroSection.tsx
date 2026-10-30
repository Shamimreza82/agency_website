"use client";

import Link from "next/link";
import Image from "next/image";

const CHECKS = [
  "Senior engineers only",
  "Ship in weeks, not months",
  "Monitoring included",
];

const AVATARS = [
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/65e3fcd7c34e8ffed623b1d08907976f-1619207353829/ff591810-8646-4d69-a3a4-617405c8f453.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/110f4fff726164f780b94ff9d60a8ec1-1624213898824/2b462463-e813-4728-8bae-8c46b8b53282.jpeg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d5b74f37aabb5bf397f928fa8ef83174-743836741596390704.906231/90ABB451-BF26-4D22-A958-08C501FE2C8B.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/33256108/original/600710_10151401161744070_286028602_n.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/33bc4173ea279a054c29d0d8f6b4ce07-1539806278747/28413816-05d1-4f97-a685-318a19b47623.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1540103/original/aa.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8fd94d7e384933f3b8ea57b47b1b0c2e-1707576894598/09d21929-1a00-45fd-bc51-18dd8ba8c9c4.jpeg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ac52a372ae434d3358e2f5a52a6c2b3a-1654792993352/8e493fba-1687-45c8-a286-1af0ef3a34e3.jpg",
  "https://images.bigibyte.com/cdn-cgi/image/width=160,height=160,fit=cover,quality=80,format=auto/client/1777579006404.jpg",
  "https://images.bigibyte.com/cdn-cgi/image/width=160,height=160,fit=cover,quality=80,format=auto/client/1652600318017.jpg",
];

const HERO_SHOTS = [
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-scraper-live-runs.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-web-scraper-runs-dashboard.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-automation-flow-canvas.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-b2b-saas-leads-database.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-python-scraper-code.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-price-tracker-mobile-app.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-google-maps-leads.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-real-estate-listings-map.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-ai-agent-steps.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-ecommerce-product-catalog-sync.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-product-extraction.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-google-maps-lead-automation.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-crm-pipeline.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-ai-scraping-agent-chat.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-real-estate-listings.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-business-leads-spreadsheet-delivery.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-slack-report.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-social-creator-insights-dashboard.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-data-notebook.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-competitor-pricing-heatmap.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-rag-knowledge-base.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-python-playwright-scraper-code.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-verified-email-list.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-hotel-price-comparison-lisbon.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-monitoring-alerts.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-remote-job-board-scraper.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-inbox-automation.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-agent-lead-workflow-vertical.webp",
];

const SHOT_STYLE = {
  height: "clamp(240px, 34vw, 460px)",
  aspectRatio: "16 / 10",
  borderRadius: "20px",
  overflow: "hidden",
  background: "rgb(238, 240, 242)",
} as React.CSSProperties;

const IMG_STYLE = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1)",
  transition: "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)",
} as React.CSSProperties;

export default function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        marginTop: "-80px",
        padding: "166px 20px 40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-12%",
            top: "-18%",
            width: "52%",
            height: "78%",
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(168, 182, 202, 0.55), rgba(168, 182, 202, 0.18) 55%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-10%",
            top: "-24%",
            width: "62%",
            height: "86%",
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(24, 32, 43, 0.22), rgba(60, 74, 94, 0.1) 55%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "-30%",
            width: "40%",
            height: "55%",
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(206, 214, 226, 0.6), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0",
            background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 45%, rgb(255, 255, 255) 92%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: "860px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            color: "rgb(91, 99, 110)",
            background: "rgb(255, 255, 255)",
            border: "1px solid rgb(230, 232, 235)",
            padding: "6px 14px 6px 8px",
            borderRadius: "999px",
          }}
        >
          <span
            style={{
              background: "rgb(240, 241, 243)",
              color: "rgb(24, 32, 43)",
              fontWeight: 500,
              padding: "3px 9px",
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            New
          </span>
          Booking Q4 2026 projects
        </div>

        <h1
          style={{
            margin: 0,
            fontWeight: 500,
            fontSize: "clamp(40px, 5.6vw, 72px)",
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            color: "rgb(24, 32, 43)",
          }}
        >
          Your data partner for scraping, automation &amp; SaaS products.
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "18px",
            lineHeight: 1.55,
            color: "rgb(91, 99, 110)",
            maxWidth: "600px",
          }}
        >
          We turn messy web data into clean pipelines, and clean pipelines into
          products your customers pay for.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px 20px",
            fontSize: "14px",
            color: "rgb(53, 60, 71)",
          }}
        >
          {CHECKS.map((check) => (
            <span
              key={check}
              style={{ display: "flex", alignItems: "center", gap: "7px" }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "rgb(24, 32, 43)",
                  color: "rgb(255, 255, 255)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
              {check}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginTop: "6px",
          }}
        >
          <a
            href="https://cal.com/shamim-reza-pq9t65"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgb(24, 32, 43)",
              color: "rgb(255, 255, 255)",
              padding: "14px 24px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            Book a free call
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgb(255, 255, 255)",
                color: "rgb(24, 32, 43)",
                display: "grid",
                placeItems: "center",
                fontSize: "12px",
              }}
            >
              ↗
            </span>
          </a>
          <Link
            href="#work"
            style={{
              background: "rgb(255, 255, 255)",
              border: "1px solid rgb(221, 224, 228)",
              padding: "14px 24px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 500,
              color: "rgb(24, 32, 43)",
              textDecoration: "none",
            }}
          >
            See our work
          </Link>
        </div>

        <div
          data-r="proof"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "6px",
          }}
        >
          <div
            style={{ display: "flex", paddingLeft: "10px" }}
          >
            {AVATARS.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "38px",
                  height: "38px",
                  marginLeft: "-10px",
                  border: "2px solid rgb(255, 255, 255)",
                  borderRadius: "50%",
                  backgroundColor: "rgb(238, 240, 242)",
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  boxShadow: "rgba(24, 32, 43, 0.12) 0px 2px 6px",
                  transition:
                    "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
          <div
            data-r="proof-text"
            style={{
              fontSize: "14px",
              lineHeight: 1.4,
              color: "rgb(91, 99, 110)",
              textAlign: "left",
            }}
          >
            <span style={{ color: "rgb(24, 32, 43)", fontWeight: 500 }}>
              Join founders who automated their data.
            </span>{" "}
            <br />
            Your project could be next.
          </div>
        </div>
      </div>

      <div
        id="heroShots"
        data-m-hide=""
        style={{
          position: "relative",
          margin: "72px -20px 0px",
          overflow: "auto hidden",
          scrollbarWidth: "none",
          cursor: "grab",
          touchAction: "pan-x pan-y",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            paddingRight: "16px",
            width: "max-content",
          }}
        >
          {HERO_SHOTS.map((src, i) => (
            <div key={i} style={SHOT_STYLE}>
              <Image
                src={src}
                alt={`Project shot ${i + 1}`}
                style={IMG_STYLE}
                width={1400}
                height={875}
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
