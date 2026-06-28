"use client";

import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been received. We will get back to you at ${email} within 24 hours.`);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-section">
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: 24 }}>Get in Touch</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontSize: "1.5rem" }}>📧</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Email</div>
                    <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>support@vefogix.com</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontSize: "1.5rem" }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Phone</div>
                    <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>+1 (555) 123-4567</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Address</div>
                    <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>
                      123 Market Street, Suite 400<br />
                      San Francisco, CA 94105<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Business Hours</h3>
                <div style={{ color: "var(--text-muted)", fontSize: ".9rem", lineHeight: 1.8 }}>
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                  <div>Sunday: Closed</div>
                  <div style={{ marginTop: 8, color: "var(--primary)", fontWeight: 500 }}>24/7 support available via email</div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={{ padding: 32 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div>
                    <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6, color: "var(--text-muted)" }}>Name</label>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6, color: "var(--text-muted)" }}>Email</label>
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6, color: "var(--text-muted)" }}>Subject</label>
                    <input type="text" placeholder="How can we help?" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6, color: "var(--text-muted)" }}>Message</label>
                    <textarea placeholder="Tell us more about your inquiry..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
