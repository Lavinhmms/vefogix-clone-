"use client";
import { useState } from "react";

const SCHEMA_TYPES = ["Article", "LocalBusiness", "Product", "FAQ", "Review", "Event"];

const TEMPLATES = {
  Article: { headline: "", description: "", author: "", datePublished: "", image: "" },
  LocalBusiness: { name: "", address: "", phone: "", openingHours: "" },
  Product: { name: "", description: "", price: "", currency: "USD", availability: "InStock" },
  FAQ: { question1: "", answer1: "", question2: "", answer2: "", question3: "", answer3: "" },
  Review: { item: "", ratingValue: "", author: "", reviewBody: "" },
  Event: { name: "", startDate: "", location: "", description: "" },
};

export default function SchemaGenerator() {
  const [schemaType, setSchemaType] = useState("Article");
  const [form, setForm] = useState(TEMPLATES.Article);
  const [output, setOutput] = useState("");

  const updateForm = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const changeType = (type) => {
    setSchemaType(type);
    setForm(TEMPLATES[type]);
    setOutput("");
  };

  const generate = () => {
    let json = {};
    switch (schemaType) {
      case "Article":
        json = { "@context": "https://schema.org", "@type": "Article", headline: form.headline, description: form.description, author: { "@type": "Person", name: form.author }, datePublished: form.datePublished, image: form.image };
        break;
      case "LocalBusiness":
        json = { "@context": "https://schema.org", "@type": "LocalBusiness", name: form.name, address: { "@type": "PostalAddress", streetAddress: form.address }, telephone: form.phone, openingHours: form.openingHours };
        break;
      case "Product":
        json = { "@context": "https://schema.org", "@type": "Product", name: form.name, description: form.description, offers: { "@type": "Offer", price: form.price, priceCurrency: form.currency, availability: `https://schema.org/${form.availability}` } };
        break;
      case "FAQ":
        json = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [form.question1 && form.answer1 ? { "@type": "Question", name: form.question1, acceptedAnswer: { "@type": "Answer", text: form.answer1 } } : null, form.question2 && form.answer2 ? { "@type": "Question", name: form.question2, acceptedAnswer: { "@type": "Answer", text: form.answer2 } } : null, form.question3 && form.answer3 ? { "@type": "Question", name: form.question3, acceptedAnswer: { "@type": "Answer", text: form.answer3 } } : null].filter(Boolean) };
        break;
      case "Review":
        json = { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "Thing", name: form.item }, reviewRating: { "@type": "Rating", ratingValue: form.ratingValue }, author: { "@type": "Person", name: form.author }, reviewBody: form.reviewBody };
        break;
      case "Event":
        json = { "@context": "https://schema.org", "@type": "Event", name: form.name, startDate: form.startDate, location: { "@type": "Place", name: form.location }, description: form.description };
        break;
    }
    setOutput(JSON.stringify(json, null, 2));
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  const fields = Object.entries(TEMPLATES[schemaType]).map(([key]) => {
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
    const placeholder = key === "currency" ? "USD" : key === "availability" ? "InStock / OutOfStock / PreOrder" : `Enter ${label.toLowerCase()}`;
    const isLong = key === "description" || key === "address" || key === "reviewBody" || key.includes("answer");
    return (
      <div key={key} style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 4 }}>{label}</label>
        {isLong ? (
          <textarea
            value={form[key]}
            onChange={(e) => updateForm(key, e.target.value)}
            placeholder={placeholder}
            rows={3}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem", resize: "vertical" }}
          />
        ) : (
          <input
            value={form[key]}
            onChange={(e) => updateForm(key, e.target.value)}
            placeholder={placeholder}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: ".9rem" }}
          />
        )}
      </div>
    );
  });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Schema Generator</h1>
          <p>Generate structured data markup for your website</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="card" style={{ padding: 32, marginBottom: 32 }}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: ".85rem", fontWeight: 500, marginBottom: 6 }}>Schema Type</label>
              <div className="grid grid-3" style={{ gap: 8 }}>
                {SCHEMA_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => changeType(t)}
                    className="btn"
                    style={{
                      background: schemaType === t ? "var(--primary)" : "var(--bg-alt)",
                      color: schemaType === t ? "#fff" : "var(--text)",
                      border: schemaType === t ? "none" : "1px solid var(--border)",
                      padding: "8px 12px",
                      fontSize: ".85rem",
                      justifyContent: "center",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {fields}

            <button className="btn btn-primary" onClick={generate}>
              Generate Schema
            </button>
          </div>

          {output && (
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>JSON-LD Output</h3>
                <button className="btn btn-primary" onClick={copy} style={{ padding: "6px 16px", fontSize: ".85rem" }}>
                  Copy
                </button>
              </div>
              <pre
                style={{
                  background: "#1e293b",
                  color: "#e2e8f0",
                  padding: 20,
                  borderRadius: "var(--radius-sm)",
                  fontSize: ".85rem",
                  overflowX: "auto",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                }}
              >
                <code>{output}</code>
              </pre>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
