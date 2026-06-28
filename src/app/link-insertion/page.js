import Link from "next/link";

export default function LinkInsertion() {
  const packages = [
    {
      name: "Single",
      price: "$79",
      features: ["1 Link Insertion", "Existing High-Authority Content", "DoFollow Link", "Niche-Relevant Page", "Basic Report", "Standard Delivery"]
    },
    {
      name: "Multi",
      price: "$299",
      features: ["5 Link Insertions", "Existing High-Authority Content", "DoFollow Links", "Niche-Relevant Pages", "Detailed Report", "Fast Delivery"]
    },
    {
      name: "Bulk",
      price: "$549",
      features: ["12 Link Insertions", "Existing High-Authority Content", "DoFollow Links", "Niche-Relevant Pages", "Premium Report", "Express Delivery", "Dedicated Account Manager"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Link Insertion</h1>
          <p>Add your links to existing high-authority content</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Link Insertion?</h2>
          <p className="section-subtitle">Leverage existing content assets to build powerful backlinks quickly</p>
          <div className="features-grid">
            <div className="feature-card card">
              <h3>Faster Results</h3>
              <p>Skip the content creation process and get your links placed on already-ranking pages.</p>
            </div>
            <div className="feature-card card">
              <h3>Proven Authority</h3>
              <p>Target pages that already have established domain authority and traffic.</p>
            </div>
            <div className="feature-card card">
              <h3>Contextual Relevance</h3>
              <p>Links are placed within relevant, existing content for natural contextual integration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Link Insertion Packages</h2>
          <p className="section-subtitle">Choose the package that matches your link building needs</p>
          <div className="grid grid-3">
            {packages.map((pkg, i) => (
              <div className="card" key={i} style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>{pkg.name}</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: 24 }}>{pkg.price}</div>
                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: 24, flex: 1 }}>
                  {pkg.features.map((f, fi) => (
                    <li key={fi} style={{ padding: "8px 0", fontSize: ".9rem", color: "var(--text-muted)", borderBottom: fi < pkg.features.length - 1 ? "1px solid var(--border)" : "none" }}>
                      &#10003; {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signin" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e3a8a, #0f172a)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Ready to Insert Your Links?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Get your links placed on high-authority pages and boost your search rankings today.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Get Started</Link>
        </div>
      </section>
    </>
  );
}
