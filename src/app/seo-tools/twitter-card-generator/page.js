"use client";
import { useState } from "react";

const CARD_TYPES = ["summary", "summary_large_image", "app", "player"];

export default function TwitterCardGenerator() {
  const [cardType, setCardType] = useState("summary_large_image");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [site, setSite] = useState("");
  const [creator, setCreator] = useState("");
  const [output, setOutput] = useState("");

  const generate = () => {
    const tags = [
      `<meta name="twitter:card" content="${cardType}" />`,
      title && `<meta name="twitter:title" content="${title}" />`,
      description && `<meta name="twitter:description" content="${description}" />`,
      image && `<meta name="twitter:image" content="${image}" />`,
      site && `<meta name="twitter:site" content="${site}" />`,
      creator && `<meta name="twitter:creator" content="${creator}" />`,
    ]
      .filter(Boolean)
      .join("\n");
    setOutput(tags);
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  const fields = [
    { label: "Card Type", value: cardType, set: setCardType, type: "select" },
    { label: "Title", value: title, set: setTitle },
    { label: "Description", value: description, set: setDescription, long: true },
    { label: "Image URL", value: image, set: setImage },
    { label: "Site (@username)", value: site, set: setSite },
    { label: "Creator (@username)", value: creator, set: setCreator },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Twitter Card Generator</h1>
          <p>Generate Twitter Card meta tags</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            {fields.map((f) => (
              <div key={f.label} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 4 }}>{f.label}</label>
                {f.type === "select" ? (
                  <select
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", background: "#fff" }}
                  >
                    {CARD_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                ) : f.long ? (
                  <textarea
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    placeholder={`Enter ${f.label.toLowerCase()}`}
                    rows={3}
                    style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical" }}
                  />
                ) : (
                  <input
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    placeholder={`Enter ${f.label.toLowerCase()}`}
                    style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                  />
                )}
              </div>
            ))}
            <button className="btn btn-primary" onClick={generate}>
              Generate Tags
            </button>
          </div>

          {output && (
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Meta Tags</h3>
                <button className="btn btn-primary" onClick={copy} style={{ padding: "6px 16px", fontSize: ".85rem" }}>
                  Copy
                </button>
              </div>
              <pre
                style={{
                  background: "#1e293b",
                  color: "#e2e8f0",
                  padding: 20,
                  borderRadius: "var(--radius-sm)",
                  fontSize: ".85rem",
                  overflowX: "auto",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                }}
              >
                <code>{output}</code>
              </pre>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
