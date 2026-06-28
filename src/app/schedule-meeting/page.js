"use client";
import { useState } from "react";

export default function ScheduleMeeting() {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", topic: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const meetings = JSON.parse(localStorage.getItem("scheduled_meetings") || "[]");
    meetings.push({ ...form, id: Date.now() });
    localStorage.setItem("scheduled_meetings", JSON.stringify(meetings));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
          <h1 style={{ marginBottom: 12 }}>Meeting Scheduled!</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>We'll send a confirmation to {form.email}</p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Schedule Another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Schedule a Meeting</h1>
          <p>Book a call with our team to discuss your SEO and link building needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <form onSubmit={handleSubmit} className="card" style={{ padding: 32 }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Topic</label>
              <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} required>
                <option value="">Select a topic</option>
                <option>Link Building</option>
                <option>Guest Posting</option>
                <option>Content Marketing</option>
                <option>SEO Audit</option>
                <option>Becoming a Publisher</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Schedule Meeting</button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: .85rem; font-weight: 500; margin-bottom: 6px; }
        .form-group input, .form-group select { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: .9rem; }
      `}</style>
    </>
  );
}
