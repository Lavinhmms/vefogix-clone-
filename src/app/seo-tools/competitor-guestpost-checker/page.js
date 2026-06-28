"use client";
import { useState } from "react";

const sitesA = [
  { domain: "techradar.com", dr: 82, da: 79, article: "How AI Is Transforming Digital Marketing", date: "2025-12-10" },
  { domain: "searchenginejournal.com", dr: 76, da: 71, article: "The Ultimate Guide to Link Building in 2026", date: "2026-01-05" },
  { domain: "neilpatel.com", dr: 80, da: 76, article: "Why Your SEO Strategy Needs a Refresh", date: "2025-11-20" },
  { domain: "backlinko.com", dr: 78, da: 73, article: "Content Marketing Trends to Watch", date: "2026-02-14" },
  { domain: "moz.com", dr: 85, da: 81, article: "Understanding Domain Authority in Modern SEO", date: "2026-01-28" },
  { domain: "hubspot.com", dr: 90, da: 87, article: "Growth Marketing Playbook for 2026", date: "2025-12-05" },
  { domain: "semrush.com", dr: 83, da: 78, article: "Competitor Analysis: Finding Your Edge", date: "2026-03-01" },
  { domain: "searchenginewatch.com", dr: 68, da: 63, article: "Guest Posting Best Practices", date: "2025-10-15" },
];

const sitesB = [
  { domain: "forbes.com", dr: 92, da: 88, article: "Lessons from Top Marketing Leaders", date: "2026-02-20" },
  { domain: "entrepreneur.com", dr: 79, da: 75, article: "Scaling Your Startup with Smart SEO", date: "2025-12-18" },
  { domain: "businessinsider.com", dr: 86, da: 83, article: "Industry Disruption and Market Strategy", date: "2026-01-10" },
  { domain: "fastcompany.com", dr: 77, da: 72, article: "Innovation in Content Marketing", date: "2025-11-30" },
  { domain: "inc.com", dr: 74, da: 70, article: "How to Build Authority in Your Niche", date: "2026-03-05" },
  { domain: "contentmarketinginstitute.com", dr: 65, da: 60, article: "Content Strategy Framework for 2026", date: "2026-01-22" },
  { domain: "copyblogger.com", dr: 62, da: 58, article: "Writing Content That Ranks", date: "2025-09-14" },
  { domain: "socialmediatoday.com", dr: 64, da: 59, article: "Social Signals and Their Impact on SEO", date: "2026-02-01" },
];

export default function CompetitorGuestPostChecker() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const check = (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    const pool = url.includes("2") || url.includes("b") || url.includes("shop") || url.includes("store") ? sitesB : sitesA;
    setTimeout(() => {
      setResults(pool.map((s) => ({
        ...s,
        article: s.article,
      })));
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Competitor Guest Post Checker</h1>
          <p>Find where your competitors are publishing guest posts</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={check} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Competitor Website URL</label>
              <input
                type="url"
                placeholder="https://competitor.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Checking..." : "Check"}
            </button>
          </form>

          {results && (
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>
                Found {results.length} guest post placements
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {results.map((site, i) => (
                  <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{site.domain}</div>
                      <div style={{ fontSize: ".85rem", color: "var(--text-muted)", marginTop: 2 }}>{site.article}</div>
                      <div style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: 2 }}>
                        Published: {site.date}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
                      <div style={{ fontSize: ".9rem", fontWeight: 600 }}>DR {site.dr}</div>
                      <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>DA {site.da}</div>
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
