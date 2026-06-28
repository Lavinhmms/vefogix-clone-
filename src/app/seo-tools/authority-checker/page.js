"use client";
import { useState } from "react";

const TOP_KEYWORDS = [
  { keyword: "seo tools", position: 3 },
  { keyword: "domain authority checker", position: 5 },
  { keyword: "backlink checker", position: 2 },
  { keyword: "keyword density tool", position: 8 },
  { keyword: "free seo checker", position: 4 },
];

export default function AuthorityChecker() {
  const [url, setUrl] = useState("");
  const [metrics, setMetrics] = useState(null);

  const check = () => {
    if (!url.trim()) return;
    const mock = {
      da: Math.floor(Math.random() * 50) + 30,
      pa: Math.floor(Math.random() * 40) + 25,
      dr: Math.floor(Math.random() * 60) + 20,
      spam: Math.floor(Math.random() * 8) + 1,
      refDomains: Math.floor(Math.random() * 8000) + 200,
      backlinks: Math.floor(Math.random() * 600000) + 500,
      keywords: TOP_KEYWORDS,
    };
    setTimeout(() => setMetrics(mock), 600);
  };

  const gauge = (label, value, max, color = "var(--primary)") => {
    const pct = Math.min((value / max) * 100, 100);
    return (
      <div className="card" style={{ padding: "20px" }}>
        <div style={{ fontSize: ".85rem", color: "var(--text-muted)", marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: "1.75rem", fontWeight: 700, color, marginBottom: 8 }}>{value}</div>
        <div style={{ width: "100%", height: 8, background: "var(--bg-alt)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s" }} />
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Website Authority Checker</h1>
          <p>Check your website's authority metrics</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>
              Website URL
            </label>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                style={{ flex: 1, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
              />
              <button className="btn btn-primary" onClick={check}>
                Check Authority
              </button>
            </div>
          </div>

          {metrics && (
            <>
              <div className="grid grid-3" style={{ marginBottom: 24 }}>
                {gauge("Domain Authority", metrics.da, 100, "#2563eb")}
                {gauge("Page Authority", metrics.pa, 100, "#06b6d4")}
                {gauge("Domain Rating", metrics.dr, 100, "#8b5cf6")}
                {gauge("Spam Score", metrics.spam, 100, metrics.spam > 5 ? "#ef4444" : "#22c55e")}
                {gauge("Referring Domains", metrics.refDomains, 10000, "#f59e0b")}
                {gauge("Total Backlinks", metrics.backlinks, 1000000, "#10b981")}
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>Top Keywords</h3>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "var(--bg-alt)", textAlign: "left" }}>
                        <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600 }}>Keyword</th>
                        <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600, textAlign: "center" }}>Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metrics.keywords.map((k, i) => (
                        <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
                          <td style={{ padding: "10px 16px", fontSize: ".9rem", fontWeight: 500 }}>{k.keyword}</td>
                          <td style={{ padding: "10px 16px", textAlign: "center" }}>
                            <span className="tag" style={{ background: k.position <= 3 ? "rgba(34,197,94,.1)" : "rgba(37,99,235,.1)", color: k.position <= 3 ? "#22c55e" : "var(--primary)" }}>
                              #{k.position}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
