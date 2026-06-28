"use client";
import { useState } from "react";
import Link from "next/link";

export default function PublisherSubmitPage() {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    websiteName: "",
    category: "Business",
    language: "English",
    yourName: "",
    yourEmail: "",
    description: "",
    traffic: "<1K",
    daDr: "0-20",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("publisher_submissions") || "[]");
    existing.push({ ...formData, id: Date.now(), status: "pending", submittedAt: new Date().toISOString() });
    localStorage.setItem("publisher_submissions", JSON.stringify(existing));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="page-container">
        <div className="submit-success">
          <h2>Thank You!</h2>
          <p>Your website has been submitted! Our team will review it within 48 hours.</p>
          <Link href="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="page-hero">
        <h1>Submit Your Website</h1>
        <p className="page-subtitle">List your website on VefoGix and start earning from guest posts</p>
      </div>

      <div className="submit-layout">
        <div className="submit-form-col">
          <form onSubmit={handleSubmit} className="submit-form">
            <div className="form-group">
              <label htmlFor="websiteUrl">Website URL *</label>
              <input id="websiteUrl" name="websiteUrl" type="url" required value={formData.websiteUrl} onChange={handleChange} placeholder="https://example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="websiteName">Website Name *</label>
              <input id="websiteName" name="websiteName" type="text" required value={formData.websiteName} onChange={handleChange} placeholder="My Awesome Site" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange}>
                  <option>Business</option>
                  <option>Technology</option>
                  <option>Health</option>
                  <option>Finance</option>
                  <option>Travel</option>
                  <option>Education</option>
                  <option>Gaming</option>
                  <option>General</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select id="language" name="language" value={formData.language} onChange={handleChange}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="yourName">Your Name</label>
                <input id="yourName" name="yourName" type="text" value={formData.yourName} onChange={handleChange} placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="yourEmail">Your Email *</label>
                <input id="yourEmail" name="yourEmail" type="email" required value={formData.yourEmail} onChange={handleChange} placeholder="john@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows={4} value={formData.description} onChange={handleChange} placeholder="Brief description of your website..." />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="traffic">Monthly Traffic</label>
                <select id="traffic" name="traffic" value={formData.traffic} onChange={handleChange}>
                  <option>&lt;1K</option>
                  <option>1K-10K</option>
                  <option>10K-100K</option>
                  <option>100K-1M</option>
                  <option>1M+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="daDr">DA/DR Estimate</label>
                <select id="daDr" name="daDr" value={formData.daDr} onChange={handleChange}>
                  <option>0-20</option>
                  <option>20-40</option>
                  <option>40-60</option>
                  <option>60-80</option>
                  <option>80-100</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit Website</button>
          </form>
        </div>

        <div className="submit-info-col">
          <div className="info-card">
            <h3>Why List With Us?</h3>
            <ul className="benefits-list">
              <li>
                <strong>Monetize Your Traffic</strong>
                <p>Earn passive income by selling guest posts on your website at your own price.</p>
              </li>
              <li>
                <strong>Vetted Buyers Only</strong>
                <p>We connect you with serious buyers looking for quality backlinks and content.</p>
              </li>
              <li>
                <strong>Full Control</strong>
                <p>You approve or reject every request. Set your own rates and publishing guidelines.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
