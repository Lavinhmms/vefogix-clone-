"use client";
import { useState } from "react";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of",
  "with", "by", "is", "are", "was", "were", "be", "been", "being", "have",
  "has", "had", "do", "does", "did", "will", "would", "shall", "should",
  "may", "might", "must", "can", "could", "this", "that", "these", "those",
  "i", "you", "he", "she", "it", "we", "they", "my", "your", "his", "her",
  "its", "our", "their", "me", "him", "us", "them", "not", "no", "nor",
  "so", "if", "as", "up", "an", "all", "each", "every", "both", "few",
  "more", "most", "other", "some", "such", "only", "own", "same", "too",
  "very", "just", "about", "than", "then", "also", "well", "here", "there",
  "when", "where", "why", "how",
]);

export default function KeywordDensityChecker() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const analyze = () => {
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s'-]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 0 && !STOP_WORDS.has(w));

    const total = words.length;
    const freq = {};
    words.forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });

    const sorted = Object.entries(freq)
      .map(([keyword, count]) => ({
        keyword,
        count,
        density: total > 0 ? ((count / total) * 100).toFixed(2) : 0,
      }))
      .sort((a, b) => b.count - a.count);

    setResults(sorted);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Keyword Density Checker</h1>
          <p>Analyze keyword density in your content</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ marginBottom: 24 }}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your content here..."
              rows={10}
              style={{
                width: "100%",
                padding: 16,
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "1rem",
                resize: "vertical",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            />
            <button className="btn btn-primary" onClick={analyze}>
              Analyze
            </button>
          </div>

          {results.length > 0 && (
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "var(--bg-alt)", textAlign: "left" }}>
                    <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600, color: "var(--text-muted)" }}>Keyword</th>
                    <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600, color: "var(--text-muted)" }}>Count</th>
                    <th style={{ padding: "12px 16px", fontSize: ".85rem", fontWeight: 600, color: "var(--text-muted)" }}>Density %</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={r.keyword} style={{ borderTop: "1px solid var(--border)" }}>
                      <td style={{ padding: "10px 16px", fontWeight: 500 }}>{r.keyword}</td>
                      <td style={{ padding: "10px 16px" }}>{r.count}</td>
                      <td style={{ padding: "10px 16px" }}>{r.density}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
