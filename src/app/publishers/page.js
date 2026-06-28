import Link from "next/link";

export default function Publishers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>For Publishers</h1>
          <p>Monetize your website by selling guest posts. Join 70K+ publishers earning from their content.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16 }}>Turn Your Website Into a Revenue Stream</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
                Publishers on VefoGix earn anywhere from $5 to $500+ per guest post depending on their
                domain authority, traffic, and niche. List your website once and start receiving
                purchase requests from buyers worldwide.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {["Set your own pricing", "Accept or decline offers", "Get paid securely", "Detailed performance analytics"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".95rem" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/signin" className="btn btn-primary">Start Earning</Link>
            </div>
            <div className="card" style={{ textAlign: "center", padding: 48 }}>
              <div style={{ fontSize: "4rem", marginBottom: 16 }}>📈</div>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>70K+</h3>
              <p style={{ color: "var(--text-muted)" }}>Active Publishers Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Start earning in 4 simple steps</p>
          <div className="process-steps">
            {[
              { num: "01", title: "List Your Site", desc: "Add your website with its metrics" },
              { num: "02", title: "Set Pricing", desc: "Set your own rates for guest posts" },
              { num: "03", title: "Get Orders", desc: "Receive and accept purchase requests" },
              { num: "04", title: "Get Paid", desc: "Receive payments securely and on time" },
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
