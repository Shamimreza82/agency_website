"use client";

export default function ComparisonTable() {
  const features = [
    { label: "Senior engineers", bigibyte: true, freelancer: false, inhouse: true },
    { label: "Delivery in weeks", bigibyte: true, freelancer: true, inhouse: false },
    { label: "Works on hard-to-reach websites", bigibyte: true, freelancer: false, inhouse: false },
    { label: "Monitoring included", bigibyte: true, freelancer: false, inhouse: false },
    { label: "Fixed when a website changes", bigibyte: true, freelancer: false, inhouse: true },
    { label: "Fixed pricing", bigibyte: true, freelancer: true, inhouse: false },
    { label: "Everything we build is yours", bigibyte: true, freelancer: false, inhouse: true },
  ];

  const check = "✓";
  const cross = "✕";

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
            Why not a freelancer or a new hire?
          </h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "15px",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgb(230, 232, 235)",
                  textAlign: "left",
                }}
              >
                <th
                  style={{
                    padding: "16px 20px",
                    color: "rgb(91, 99, 110)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    color: "rgb(255, 90, 31)",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  SM Agency
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    color: "rgb(91, 99, 110)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Freelancer
                </th>
                <th
                  style={{
                    padding: "16px 20px",
                    color: "rgb(91, 99, 110)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  In-house
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.label}
                  style={{
                    borderBottom: "1px solid rgb(238, 240, 242)",
                  }}
                >
                  <td
                    style={{
                      padding: "16px 20px",
                      color: "rgb(24, 32, 43)",
                      fontSize: "15px",
                    }}
                  >
                    {f.label}
                  </td>
                  <td
                    style={{
                      padding: "16px 20px",
                      color: "rgb(255, 90, 31)",
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    {f.bigibyte ? check : cross}
                  </td>
                  <td
                    style={{
                      padding: "16px 20px",
                      color: "rgb(91, 99, 110)",
                      fontSize: "16px",
                    }}
                  >
                    {f.freelancer ? check : cross}
                  </td>
                  <td
                    style={{
                      padding: "16px 20px",
                      color: "rgb(91, 99, 110)",
                      fontSize: "16px",
                    }}
                  >
                    {f.inhouse ? check : cross}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
