import Link from "next/link";

export default function ContentMarketingServices() {
  const benefits = [
    { title: "SEO-Optimized Content", desc: "Every piece of content is researched and optimized for search engines to drive organic traffic." },
    { title: "Data-Driven Strategy", desc: "We analyze trends, keywords, and competitor content to craft a strategy that delivers results." },
    { title: "Professional Writers", desc: "Our team of experienced writers creates engaging, high-quality content that resonates with your audience." },
    { title: "Consistent Publishing", desc: "Maintain a steady stream of fresh content that keeps your audience engaged and search engines coming back." }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$499",
      features: ["4 Articles Per Month", "500-800 Words Per Article", "SEO Optimization", "1 Round of Revisions", "Basic Keyword Research", "Basic Report"]
    },
    {
      name: "Growth",
      price: "$999",
      features: ["10 Articles Per Month", "800-1200 Words Per Article", "SEO Optimization", "2 Rounds of Revisions", "Detailed Keyword Research", "Detailed Report", "Content Strategy"]
    },
    {
      name: "Scale",
      price: "$1999",
      features: ["25 Articles Per Month", "1200-2000 Words Per Article", "SEO Optimization", "Unlimited Revisions", "Comprehensive Keyword Research", "Premium Report", "Dedicated Content Manager"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Content Marketing Services</h1>
          <p>Data-driven content that ranks and converts</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Content Marketing?</h2>
          <p className="section-subtitle">Quality content is the foundation of every successful SEO strategy</p>
          <div className="features-grid">
            {benefits.map((b, i) => (
              <div className="feature-card card" key={i}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Content Marketing Packages</h2>
          <p className="section-subtitle">Scale your content production with our flexible packages</p>
          <div className="grid grid-3">
            {packages.map((pkg, i) => (
              <div className="card" key={i} style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>{pkg.name}</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: 24 }}>{pkg.price}<span style={{ fontSize: "1rem", fontWeight: 400, color: "var(--text-muted)" }}>/mo</span></div>
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
            Ready to Transform Your Content Strategy?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Let us create content that ranks, engages, and converts your target audience.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Get Started</Link>
        </div>
      </section>
    </>
  );
}
