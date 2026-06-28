"use client";
import { useState } from "react";

export default function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", rating: "5", type: "Suggestion", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    feedbacks.push({ ...form, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: 16 }}>🙏</div>
          <h1 style={{ marginBottom: 12 }}>Thank You!</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>Your feedback helps us improve.</p>
          <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", rating: "5", type: "Suggestion", message: "" }); }}>Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Feedback</h1>
          <p>We'd love to hear your thoughts about VefoGix</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <form onSubmit={handleSubmit} className="card" style={{ padding: 32 }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div className="form-group">
                <label>Rating</label>
                <select value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ⭐</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Type</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option>Suggestion</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Compliment</option>
                  <option>Complaint</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Tell us about your experience..." style={{ width: "100%", minHeight: 120, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical" }} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit Feedback</button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: .85rem; font-weight: 500; margin-bottom: 6px; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: .9rem; }
      `}</style>
    </>
  );
}
