"use client";
import { useState } from "react";

export default function OpenGraphGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [type, setType] = useState("website");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const tags = [
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:type" content="${type}" />`,
    ];
    if (imageUrl) tags.push(`<meta property="og:image" content="${imageUrl}" />`);
    if (pageUrl) tags.push(`<meta property="og:url" content="${pageUrl}" />`);
    if (siteName) tags.push(`<meta property="og:site_name" content="${siteName}" />`);
    setOutput(tags.join("\n"));
    setCopied(false);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Open Graph Generator</h1>
          <p>Generate OG meta tags for social sharing</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={generate} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Title *</label>
                <input type="text" placeholder="My Awesome Page Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }} required />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Site Name</label>
                <input type="text" placeholder="MyWebsite" value={siteName} onChange={(e) => setSiteName(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Description *</label>
                <textarea placeholder="A brief description of your page..." value={description} onChange={(e) => setDescription(e.target.value)} rows={3} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical" }} required />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Image URL</label>
                <input type="url" placeholder="https://example.com/image.jpg" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Page URL</label>
                <input type="url" placeholder="https://example.com/page" value={pageUrl} onChange={(e) => setPageUrl(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}>
                  <option value="website">Website</option>
                  <option value="article">Article</option>
                  <option value="product">Product</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Generate Tags</button>
          </form>

          {output && (
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Generated OG Meta Tags</h3>
                <button onClick={copy} className="btn btn-primary" style={{ padding: "6px 16px", fontSize: ".85rem" }}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre style={{
                background: "var(--bg-dark)",
                color: "#e2e8f0",
                padding: 16,
                borderRadius: "var(--radius-sm)",
                fontSize: ".85rem",
                lineHeight: 1.7,
                overflowX: "auto",
                fontFamily: "monospace",
                whiteSpace: "pre",
              }}>
                {output}
              </pre>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
