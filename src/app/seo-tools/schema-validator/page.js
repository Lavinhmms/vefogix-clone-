"use client";
import { useState } from "react";

const RECOMMENDED_FIELDS = {
  Article: ["headline", "author", "datePublished"],
  LocalBusiness: ["name", "address"],
  Product: ["name", "offers"],
  FAQPage: ["mainEntity"],
  Review: ["itemReviewed", "reviewRating"],
  Event: ["name", "startDate", "location"],
};

export default function SchemaValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const validate = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      if (!parsed["@context"] || !parsed["@type"]) {
        setResult({ valid: false, error: "Missing @context or @type. This is not valid JSON-LD." });
        return;
      }
      const type = parsed["@type"];
      const keys = Object.keys(parsed);
      const propsCount = keys.length;
      const recommended = RECOMMENDED_FIELDS[type] || [];
      const missing = recommended.filter((f) => !keys.includes(f));
      setResult({
        valid: true,
        type,
        propsCount,
        missing,
        data: parsed,
      });
    } catch (e) {
      const match = e.message.match(/position\s+(\d+)/);
      const line = match ? ` (near character ${match[1]})` : "";
      setResult({ valid: false, error: `Invalid JSON: ${e.message}${line}` });
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Schema Validator</h1>
          <p>Validate your structured data markup</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>
              Paste your JSON-LD Schema
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"@context":"https://schema.org","@type":"Article","headline":"Hello"}'
              rows={10}
              style={{ width: "100%", padding: "12px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", fontFamily: "monospace", resize: "vertical", marginBottom: 16 }}
            />
            <button className="btn btn-primary" onClick={validate}>
              Validate
            </button>
          </div>

          {result && (
            <div className="card" style={{ padding: 24 }}>
              {result.valid ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: "1.25rem" }}>✅</span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Valid Schema</h3>
                  </div>
                  <div className="grid grid-2" style={{ gap: 12, marginBottom: 16 }}>
                    <div className="card" style={{ padding: "16px", textAlign: "center" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary)" }}>{result.type}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: 4 }}>Detected @type</div>
                    </div>
                    <div className="card" style={{ padding: "16px", textAlign: "center" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary)" }}>{result.propsCount}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: 4 }}>Properties</div>
                    </div>
                  </div>
                  {result.missing.length > 0 && (
                    <div>
                      <p style={{ fontSize: ".9rem", fontWeight: 600, marginBottom: 8, color: "#d97706" }}>
                        ⚠️ Missing Recommended Fields
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {result.missing.map((f) => (
                          <span key={f} className="tag" style={{ background: "rgba(217,119,6,.1)", color: "#d97706" }}>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {result.missing.length === 0 && (
                    <p style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>All recommended fields are present.</p>
                  )}
                </>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ fontSize: "1.25rem" }}>❌</span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ef4444" }}>Invalid Schema</h3>
                  </div>
                  <p style={{ color: "#ef4444", fontSize: ".9rem", whiteSpace: "pre-wrap" }}>{result.error}</p>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
