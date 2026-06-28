"use client";
import { useState } from "react";

const MOCK_IMAGES = [
  { file: "hero-banner.jpg", alt: "Hero banner showcasing product features", status: "has" },
  { file: "logo.png", alt: "Company logo", status: "has" },
  { file: "team-photo.jpg", alt: "", status: "empty" },
  { file: "product-screenshot.png", alt: "Product screenshot dashboard view", status: "has" },
  { file: "chart-q1-results.png", alt: "", status: "empty" },
  { file: "footer-background.svg", alt: "", status: "missing" },
  { file: "social-icons.png", alt: "Social media icons", status: "has" },
  { file: "banner-ad.jpg", alt: "", status: "missing" },
  { file: "testimonial-avatar.jpg", alt: "Testimonial from John Doe", status: "has" },
  { file: "infographic-seo.png", alt: "", status: "missing" },
];

export default function ImageAltChecker() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);

  const check = () => {
    if (!url.trim()) return;
    const mockResults = MOCK_IMAGES.map((img) => ({
      ...img,
      alt: img.status === "has" ? img.alt : img.status === "empty" ? "(empty)" : "",
    }));
    setTimeout(() => setResults(mockResults), 600);
  };

  const hasAlt = results ? results.filter((r) => r.status === "has").length : 0;
  const withoutAlt = results ? results.filter((r) => r.status !== "has").length : 0;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Image Alt Text Checker</h1>
          <p>Check image alt attributes on your pages</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>
              Page URL
            </label>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/page"
                style={{ flex: 1, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
              />
              <button className="btn btn-primary" onClick={check}>
                Check
              </button>
            </div>
          </div>

          {results && (
            <>
              <div className="grid grid-3" style={{ marginBottom: 24 }}>
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary)" }}>{results.length}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: 4 }}>Total Images</div>
                </div>
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#22c55e" }}>{hasAlt}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: 4 }}>With Alt Text</div>
                </div>
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ef4444" }}>{withoutAlt}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: 4 }}>Without Alt Text</div>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "var(--bg-alt)", textAlign: "left" }}>
                      <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600 }}>Image</th>
                      <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600 }}>Alt Text</th>
                      <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600, textAlign: "center" }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, i) => (
                      <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
                        <td style={{ padding: "10px 16px", fontSize: ".9rem", fontWeight: 500 }}>{r.file}</td>
                        <td style={{ padding: "10px 16px", fontSize: ".85rem", color: r.status !== "has" ? "var(--text-muted)" : "inherit", fontStyle: r.status !== "has" ? "italic" : "normal" }}>
                          {r.alt || "—"}
                        </td>
                        <td style={{ padding: "10px 16px", textAlign: "center" }}>
                          {r.status === "has" ? (
                            <span className="tag" style={{ background: "rgba(34,197,94,.1)", color: "#22c55e" }}>✅ Has alt</span>
                          ) : r.status === "empty" ? (
                            <span className="tag" style={{ background: "rgba(234,179,8,.1)", color: "#eab308" }}>⚠️ Empty alt</span>
                          ) : (
                            <span className="tag" style={{ background: "rgba(239,68,68,.1)", color: "#ef4444" }}>❌ Missing alt</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
