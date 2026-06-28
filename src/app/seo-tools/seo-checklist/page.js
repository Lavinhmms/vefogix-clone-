"use client";
import { useState, useEffect } from "react";

const categories = [
  {
    name: "Technical SEO",
    items: ["SSL/HTTPS enabled", "Mobile-friendly", "Page speed optimized", "XML sitemap submitted", "robots.txt configured"],
  },
  {
    name: "On-Page SEO",
    items: ["Title tags optimized", "Meta descriptions written", "Header tags structured", "Image alt text added", "Internal linking done"],
  },
  {
    name: "Off-Page SEO",
    items: ["Backlinks from 10+ domains", "Social media profiles", "Guest posts published", "Directory listings", "Brand mentions monitored"],
  },
  {
    name: "Content",
    items: ["Blog updated weekly", "Keyword research done", "Content length 1500+ words", "Multimedia included", "CTAs added"],
  },
];

const allItems = categories.flatMap((c) => c.items);
const STORAGE_KEY = "seo_checklist";

export default function SEOChecklist() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setChecked(JSON.parse(stored)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const completed = allItems.filter((item) => checked[item]).length;
  const progress = allItems.length > 0 ? (completed / allItems.length) * 100 : 0;
  const reset = () => {
    if (confirm("Reset all checklist items?")) setChecked({});
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>SEO Checklist</h1>
          <p>Complete SEO audit checklist for your website</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontWeight: 600 }}>{completed}/{allItems.length} completed</span>
              <button onClick={reset} className="btn" style={{ padding: "6px 16px", fontSize: ".85rem", background: "var(--bg-alt)", border: "1px solid var(--border)" }}>Reset</button>
            </div>
            <div style={{ width: "100%", height: 10, background: "var(--border)", borderRadius: 5, overflow: "hidden" }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "var(--primary)", borderRadius: 5, transition: "width .3s" }} />
            </div>
          </div>

          {categories.map((cat) => (
            <div key={cat.name} className="card" style={{ padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "var(--primary)" }}>{cat.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((item) => (
                  <label key={item} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontSize: ".9rem" }}>
                    <input
                      type="checkbox"
                      checked={!!checked[item]}
                      onChange={() => toggle(item)}
                      style={{ width: 18, height: 18, accentColor: "var(--primary)", cursor: "pointer" }}
                    />
                    <span style={{ textDecoration: checked[item] ? "line-through" : "none", color: checked[item] ? "var(--text-muted)" : "var(--text)" }}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
