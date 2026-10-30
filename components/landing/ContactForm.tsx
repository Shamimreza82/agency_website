"use client";

export default function ContactForm() {
  return (
    <section
      style={{
        padding: "80px 20px",
        borderTop: "1px solid rgb(230, 232, 235)",
        borderBottom: "1px solid rgb(230, 232, 235)",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: "0 0 16px 0",
              color: "rgb(24, 32, 43)",
            }}
          >
            Tell us what&rsquo;s slowing you down.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "rgb(91, 99, 110)",
              margin: 0,
            }}
          >
            Describe the task or the information you need, in your own words. We
            reply within a few hours with a plan and a fixed quote.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgb(230, 232, 235)",
              background: "rgb(255, 255, 255)",
              fontSize: "12px",
              fontWeight: 500,
              color: "rgb(255, 90, 31)",
            }}
          >
            SM
          </div>
          <div
            style={{
              textAlign: "left",
              fontSize: "14px",
              lineHeight: 1.4,
              color: "rgb(91, 99, 110)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: "rgb(24, 32, 43)" }}>
              Kawsar &amp; the team
            </p>
            <p style={{ margin: "4px 0 0 0" }}>{"read every brief themselves"}</p>
          </div>
        </div>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                marginBottom: "8px",
              }}
            >
              What do you need? Pick any
            </label>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {[
                "Collect data from websites",
                "Find new customers",
                "AI agents",
                "Automate a task",
                "SaaS product",
                "API",
                "Monitoring & maintenance",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgb(230, 232, 235)",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(91, 99, 110)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                marginBottom: "8px",
              }}
            >
              Budget
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "$500–1k",
                "$1k–2k",
                "$2k–5k",
                "$5k–15k",
                "$15k+",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid rgb(230, 232, 235)",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(91, 99, 110)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  {opt}
                </button>
              ))}
              <button
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgb(230, 232, 235)",
                  background: "rgb(255, 255, 255)",
                  color: "rgb(91, 99, 110)",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  cursor: "pointer",
                }}
              >
                Not sure? That&rsquo;s fine, we&rsquo;ll suggest options.
              </button>
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgb(91, 99, 110)",
                marginBottom: "8px",
              }}
            >
              A few sentences is enough.
            </label>
            <textarea
              name="message"
              rows={4}
              style={{
                width: "100%",
                borderRadius: "20px",
                border: "1px solid rgb(230, 232, 235)",
                background: "rgb(255, 255, 255)",
                padding: "16px 20px",
                fontFamily: "inherit",
                fontSize: "15px",
                color: "rgb(24, 32, 43)",
                resize: "vertical",
                outline: "none",
                boxSizing: "border-box",
              }}
              placeholder="Describe what you need..."
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgb(91, 99, 110)",
                  marginBottom: "8px",
                }}
              >
                Phone or WhatsApp (Optional)
              </label>
              <input
                name="phone"
                type="tel"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  border: "1px solid rgb(230, 232, 235)",
                  background: "rgb(255, 255, 255)",
                  padding: "14px 20px",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  color: "rgb(24, 32, 43)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                placeholder="+880 1xxx xxxxxx"
              />
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "rgb(91, 99, 110)", marginTop: "8px" }}>
            No spam, no sales calls you didn&rsquo;t ask for. NDA on request.
          </p>

          <button
            type="submit"
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
              border: 0,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Send your brief ↗
          </button>

          <p style={{ marginTop: "16px", textAlign: "center", fontSize: "14px", color: "rgb(91, 99, 110)" }}>
            Prefer to talk?{" "}
            <a
              href="https://cal.com/shamim-reza-pq9t65"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgb(24, 32, 43)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Book a free 30-minute call ↗
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
