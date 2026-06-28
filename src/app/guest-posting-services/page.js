import Link from "next/link";

export default function GuestPostingServices() {
  const packages = [
    {
      name: "Basic",
      price: "$199",
      features: ["2 Premium Guest Posts", "Sites with DR 30+", "DoFollow Links", "Niche-Relevant Sites", "500+ Words Per Post", "Basic Report"]
    },
    {
      name: "Standard",
      price: "$449",
      features: ["5 Premium Guest Posts", "Sites with DR 40+", "DoFollow Links", "Niche-Relevant Sites", "1000+ Words Per Post", "Detailed Report", "Content Optimization"]
    },
    {
      name: "Premium",
      price: "$999",
      features: ["12 Premium Guest Posts", "Sites with DR 50+", "DoFollow Links", "Niche-Relevant Sites", "1500+ Words Per Post", "Premium Report", "Dedicated Account Manager"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Guest Posting Services</h1>
          <p>Premium guest posts on authoritative websites in your niche</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Guest Posting?</h2>
          <p className="section-subtitle">Build authority, drive traffic, and earn high-quality backlinks through strategic guest posting</p>
          <div className="features-grid">
            <div className="feature-card card">
              <h3>Build Authority</h3>
              <p>Publish on reputable sites in your industry to establish your brand as a thought leader.</p>
            </div>
            <div className="feature-card card">
              <h3>Drive Targeted Traffic</h3>
              <p>Reach engaged audiences on established platforms and drive quality referral traffic.</p>
            </div>
            <div className="feature-card card">
              <h3>Earn Quality Backlinks</h3>
              <p>Secure natural, editorial backlinks from authoritative domains that boost your SEO.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Guest Posting Packages</h2>
          <p className="section-subtitle">Select the package that fits your content marketing goals</p>
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
            Start Publishing on Premium Sites
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Get your content published on authoritative websites and grow your online presence.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Get Started</Link>
        </div>
      </section>
    </>
  );
}
