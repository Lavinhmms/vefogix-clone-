"use client";
import { useState } from "react";

const longTail = [
  { keyword: "best SEO tools for small business", volume: 1200, competition: "Low" },
  { keyword: "how to improve website ranking fast", volume: 890, competition: "Medium" },
  { keyword: "affordable guest posting services for startups", volume: 340, competition: "Low" },
  { keyword: "keyword research for ecommerce websites", volume: 560, competition: "Medium" },
  { keyword: "link building strategies for new websites", volume: 720, competition: "Medium" },
];
const related = [
  { keyword: "SEO tools list", volume: 2400, competition: "High" },
  { keyword: "guest posting sites", volume: 3200, competition: "Medium" },
  { keyword: "backlink checker free", volume: 4800, competition: "High" },
  { keyword: "keyword planner", volume: 6200, competition: "High" },
  { keyword: "search engine optimization", volume: 18000, competition: "High" },
];
const questionBased = [
  { keyword: "what is guest posting in SEO", volume: 1100, competition: "Low" },
  { keyword: "how to find guest posting opportunities", volume: 880, competition: "Medium" },
  { keyword: "why is link building important", volume: 950, competition: "Medium" },
  { keyword: "how many keywords for SEO", volume: 420, competition: "Low" },
  { keyword: "what are backlinks in SEO", volume: 1500, competition: "Medium" },
];

const competitionColor = (c) => {
  if (c === "Low") return "#22c55e";
  if (c === "Medium") return "#f59e0b";
  return "#ef4444";
};

export default function KeywordSuggestions() {
  const [seed, setSeed] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const getSuggestions = (e) => {
    e.preventDefault();
    if (!seed.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const suffix = seed.trim().toLowerCase();
      const mapFn = (item) => ({
        ...item,
        keyword: item.keyword.includes(seed.trim().split(" ")[0].toLowerCase())
          ? item.keyword
          : `${seed.trim().toLowerCase()} ${item.keyword}`,
      });
      setResults({
        longTail: longTail.map(mapFn),
        related: related.map(mapFn),
        questionBased: questionBased.map(mapFn),
      });
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Keyword Suggestions</h1>
          <p>Find related keywords and phrases</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={getSuggestions} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Seed Keyword</label>
              <input
                type="text"
                placeholder="Enter a keyword..."
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Searching..." : "Get Suggestions"}
            </button>
          </form>

          {results && (
            <div>
              {Object.entries(results).map(([group, keywords]) => (
                <div key={group} className="card" style={{ padding: 24, marginBottom: 20 }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "var(--primary)", textTransform: "capitalize" }}>
                    {group.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {keywords.map((k, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < keywords.length - 1 ? "1px solid var(--border)" : "none" }}>
                        <span style={{ fontSize: ".9rem", fontWeight: 500 }}>{k.keyword}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                          <span style={{ fontSize: ".85rem", color: "var(--text-muted)" }}>{k.volume.toLocaleString()}/mo</span>
                          <span style={{ padding: "2px 10px", borderRadius: 12, fontSize: ".75rem", fontWeight: 600, background: `${competitionColor(k.competition)}20`, color: competitionColor(k.competition) }}>
                            {k.competition}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
