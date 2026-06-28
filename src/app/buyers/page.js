import Link from "next/link";

export default function Buyers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>For Buyers</h1>
          <p>Find high-quality websites for your guest posts. Boost your SEO with authoritative backlinks.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div className="card" style={{ textAlign: "center", padding: 48 }}>
              <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎯</div>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>110K+</h3>
              <p style={{ color: "var(--text-muted)" }}>Websites Available</p>
            </div>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16 }}>Find the Perfect Websites for Your Guest Posts</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
                Browse thousands of vetted websites across every niche. Filter by domain authority,
                traffic, price, and more. Purchase guest posts directly and track your orders.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {["Advanced filtering by DR, DA, traffic", "Transparent pricing with no hidden fees", "Quality guaranteed websites", "Order tracking and reporting"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".95rem" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/marketplace" className="btn btn-primary">Browse Marketplace</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How to Buy Guest Posts</h2>
          <p className="section-subtitle">4 simple steps to boost your SEO</p>
          <div className="process-steps">
            {[
              { num: "01", title: "Browse Websites", desc: "Find sites by niche, metrics, and price" },
              { num: "02", title: "Select & Pay", desc: "Choose your site and complete payment" },
              { num: "03", title: "Submit Content", desc: "Send your article or request custom writing" },
              { num: "04", title: "Track & Profit", desc: "Monitor publication and enjoy your backlinks" },
            ].map((step) => (
              <div key={step.num} className="card process-step">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
