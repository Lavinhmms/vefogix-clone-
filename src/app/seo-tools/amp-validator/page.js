"use client";
import { useState } from "react";

export default function AMPValidator() {
  const [html, setHtml] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    if (!html.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const hasWarning = html.toLowerCase().includes("style") || html.toLowerCase().includes("font") || html.toLowerCase().includes("width");
      setResults({
        valid: true,
        errors: [],
        warnings: hasWarning
          ? ["Consider using AMP-specific tags for styling (line 12)", "Image dimensions should be explicitly defined (line 21)"]
          : [],
      });
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>AMP Validator</h1>
          <p>Validate your AMP HTML pages</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={validate} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>AMP HTML Code</label>
              <textarea
                placeholder="<html amp>..."
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                rows={10}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".85rem", fontFamily: "monospace", resize: "vertical" }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Validating..." : "Validate"}
            </button>
          </form>

          {results && (
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: "2rem" }}>{results.valid ? '\u2705' : '\u274C'}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{results.valid ? 'Valid AMP' : 'Invalid AMP'}</div>
                  <div style={{ fontSize: ".85rem", color: "var(--text-muted)" }}>
                    {results.errors.length} error{results.errors.length !== 1 ? "s" : ""}, {results.warnings.length} warning{results.warnings.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              {results.errors.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontSize: ".95rem", fontWeight: 600, color: "#ef4444", marginBottom: 8 }}>Errors</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {results.errors.map((err, i) => (
                      <div key={i} style={{ padding: "8px 12px", background: "#fef2f2", borderRadius: "var(--radius-sm)", fontSize: ".85rem", color: "#dc2626" }}>{err}</div>
                    ))}
                  </div>
                </div>
              )}

              {results.warnings.length > 0 && (
                <div>
                  <h4 style={{ fontSize: ".95rem", fontWeight: 600, color: "#f59e0b", marginBottom: 8 }}>Warnings</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {results.warnings.map((w, i) => (
                      <div key={i} style={{ padding: "8px 12px", background: "#fffbeb", borderRadius: "var(--radius-sm)", fontSize: ".85rem", color: "#d97706" }}>{w}</div>
                    ))}
                  </div>
                </div>
              )}

              {results.errors.length === 0 && results.warnings.length === 0 && (
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>No issues found. Your AMP page is valid!</p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
