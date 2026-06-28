"use client";
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charsWithSpaces = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, "").length;
  const sentences = text ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text ? text.split(/\n\s*\n/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(words / 200);

  const handleChange = (e) => setText(e.target.value);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Word Counter</h1>
          <p>Count words, characters, sentences, and paragraphs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ marginBottom: 32 }}>
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Type or paste your content here..."
              rows={12}
              style={{
                width: "100%",
                padding: 16,
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "1rem",
                resize: "vertical",
                lineHeight: 1.7,
              }}
            />
          </div>

          <div className="grid grid-4">
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{words}</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>Words</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{charsWithSpaces}</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>Characters</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{charsWithoutSpaces}</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>No Spaces</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{sentences}</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>Sentences</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{paragraphs}</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>Paragraphs</div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>{readingTime} min</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem", marginTop: 4 }}>Reading Time</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
