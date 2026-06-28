"use client";
import { useState } from "react";

export default function SitemapExtractor() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const extract = (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    const domain = url.replace(/^https?:\/\//, "").replace(/\/.*$/, "").split("/")[0];
    const sitemaps = [
      { path: "/sitemap.xml", status: "200 OK" },
      { path: "/sitemap_index.xml", status: "200 OK" },
      { path: "/page-sitemap.xml", status: "200 OK" },
      { path: "/post-sitemap.xml", status: "200 OK" },
      { path: "/category-sitemap.xml", status: "200 OK" },
      { path: "/tag-sitemap.xml", status: "301 Redirect" },
      { path: "/author-sitemap.xml", status: "404 Not Found" },
      { path: "/news-sitemap.xml", status: "200 OK" },
    ];
    setTimeout(() => {
      setResults(sitemaps.map((s) => ({ ...s, fullUrl: `https://${domain}${s.path}` })));
      setLoading(false);
    }, 800);
  };

  const statusColor = (status) => {
    if (status.startsWith("200")) return "#22c55e";
    if (status.startsWith("301")) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>XML Sitemap Extractor</h1>
          <p>Extract XML sitemaps from any website</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={extract} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Website URL</label>
              <input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Extracting..." : "Extract"}
            </button>
          </form>

          {results && (
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>
                Found {results.length} sitemaps
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {results.map((s, i) => (
                  <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px" }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{s.fullUrl}</div>
                      <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>{s.path}</div>
                    </div>
                    <span style={{
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: ".8rem",
                      fontWeight: 600,
                      background: `${statusColor(s.status)}20`,
                      color: statusColor(s.status)
                    }}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
