"use client";
import { useState } from "react";

export default function BacklinkGenerator() {
  const [url, setUrl] = useState("");
  const [niche, setNiche] = useState("");
  const [results, setResults] = useState(null);

  const generate = (e) => {
    e.preventDefault();
    if (!url) return;
    const mockSites = [
      { site: "example-techblog.com", dr: 45, da: 38, price: 25, type: "DoFollow" },
      { site: "niche-news.net", dr: 52, da: 41, price: 35, type: "DoFollow" },
      { site: "industry-insider.org", dr: 38, da: 33, price: 18, type: "DoFollow" },
      { site: "topbusinessdaily.com", dr: 61, da: 55, price: 55, type: "NoFollow" },
      { site: "authorityblogger.io", dr: 72, da: 68, price: 89, type: "DoFollow" },
      { site: "startupdigest.co", dr: 33, da: 29, price: 15, type: "DoFollow" },
    ];
    setTimeout(() => setResults(mockSites), 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Backlink Generator</h1>
          <p>Find guest post opportunities and backlink prospects for your website</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={generate} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Your Website URL</label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Niche / Category</label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                >
                  <option value="">Any</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Health</option>
                  <option>Finance</option>
                  <option>Travel</option>
                  <option>Education</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Generate Backlink Opportunities</button>
          </form>

          {results && (
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>
                Found {results.length} backlink opportunities
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {results.map((site, i) => (
                  <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px" }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{site.site}</div>
                      <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>
                        DR {site.dr} • DA {site.da} • {site.type}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontWeight: 700, color: "var(--primary)" }}>${site.price}</span>
                      <button className="btn btn-primary" style={{ padding: "6px 16px", fontSize: ".85rem" }}>Get This Link</button>
                    </div>
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
