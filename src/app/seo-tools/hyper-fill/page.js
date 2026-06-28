"use client";
import { useState } from "react";

const headingsPool = [
  { heading: "What Is [Topic]? A Complete Overview", bullets: ["Definition and core concepts of [Topic]", "Why [Topic] matters in today's landscape", "Key statistics and industry trends around [Topic]"] },
  { heading: "Why [Topic] Is Important for Your Business", bullets: ["How [Topic] impacts your bottom line", "Real-world examples of [Topic] in action", "The ROI of investing in [Topic]"] },
  { heading: "Key Strategies for [Topic] Success", bullets: ["Strategy 1: Leverage data-driven insights", "Strategy 2: Build a strong foundation", "Strategy 3: Continuous optimization and testing"] },
  { heading: "Common Mistakes to Avoid with [Topic]", bullets: ["Mistake 1: Lack of proper planning", "Mistake 2: Ignoring the competition", "Mistake 3: Focusing on quantity over quality"] },
  { heading: "The Future of [Topic] in [Current Year]", bullets: ["Emerging technologies shaping [Topic]", "Predicted changes in consumer behavior", "How to stay ahead of the curve with [Topic]"] },
];

export default function HyperFill() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const year = new Date().getFullYear();
      setResults(headingsPool.map((h) => ({
        heading: h.heading.replace(/\[Topic\]/g, topic.trim()).replace(/\[Current Year\]/g, year),
        bullets: h.bullets.map((b) => b.replace(/\[Topic\]/g, topic.trim()).replace(/\[Current Year\]/g, year)),
      })));
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Hyper Fill</h1>
          <p>Fill content gaps and generate topic ideas</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <form onSubmit={generate} className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Your Topic / Keyword</label>
              <textarea
                placeholder="Enter your topic or keyword..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                rows={4}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical" }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>

          {results && (
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16 }}>
                Content Outline for "{topic.trim()}"
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {results.map((section, i) => (
                  <div key={i} className="card" style={{ padding: 20 }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "var(--primary)" }}>{section.heading}</h4>
                    <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
                      {section.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>{b}</li>
                      ))}
                    </ul>
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
