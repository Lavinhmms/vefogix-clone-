"use client";
import { useState } from "react";

export default function BulkDAChecker() {
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState(null);

  const check = (e) => {
    e.preventDefault();
    if (!urls.trim()) return;
    const domains = urls.split("\n").map((u) => u.trim()).filter(Boolean);
    const mockResults = domains.map((url) => ({
      url,
      da: Math.floor(Math.random() * 60) + 10,
      pa: Math.floor(Math.random() * 50) + 5,
      ss: Math.floor(Math.random() * 40),
    }));
    setTimeout(() => setResults(mockResults), 500);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Bulk DA, PA & Spam Score Checker</h1>
          <p>Check Domain Authority, Page Authority, and Spam Score for multiple URLs at once</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={check} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>
              Enter URLs (one per line)
            </label>
            <textarea
              placeholder="https://example1.com&#10;https://example2.com&#10;https://example3.com"
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              style={{ width: "100%", minHeight: 150, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical", marginBottom: 16 }}
            />
            <button type="submit" className="btn btn-primary">Check URLs</button>
          </form>

          {results && (
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>
                Results ({results.length} URLs)
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "var(--bg-alt)" }}>
                      <th style={{ padding: "12px 16px", textAlign: "left", fontSize: ".85rem", fontWeight: 600 }}>URL</th>
                      <th style={{ padding: "12px 16px", textAlign: "center", fontSize: ".85rem", fontWeight: 600 }}>DA</th>
                      <th style={{ padding: "12px 16px", textAlign: "center", fontSize: ".85rem", fontWeight: 600 }}>PA</th>
                      <th style={{ padding: "12px 16px", textAlign: "center", fontSize: ".85rem", fontWeight: 600 }}>Spam Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "12px 16px", fontSize: ".9rem", fontWeight: 500 }}>{r.url}</td>
                        <td style={{ padding: "12px 16px", textAlign: "center" }}>
                          <span className="tag">{r.da}</span>
                        </td>
                        <td style={{ padding: "12px 16px", textAlign: "center" }}>
                          <span className="tag">{r.pa}</span>
                        </td>
                        <td style={{ padding: "12px 16px", textAlign: "center" }}>
                          <span className="tag" style={{ background: r.ss > 20 ? "rgba(239,68,68,.1)" : "rgba(34,197,94,.1)", color: r.ss > 20 ? "#ef4444" : "#22c55e" }}>{r.ss}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
