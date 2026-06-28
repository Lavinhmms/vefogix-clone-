import Link from "next/link";

export default function LinkBuildingServices() {
  const benefits = [
    { title: "High-Quality Backlinks", desc: "Earn links from authoritative, relevant websites that boost your domain authority and search rankings." },
    { title: "White-Hat Strategies", desc: "We use only ethical, search-engine-approved techniques that deliver sustainable long-term results." },
    { title: "Customized Approach", desc: "Every campaign is tailored to your niche, goals, and budget for maximum ROI." },
    { title: "Comprehensive Reporting", desc: "Get detailed reports on every backlink acquired, including domain metrics and traffic impact." }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$299",
      features: ["5 High-Quality Backlinks", "Sites with DR 30+", "DoFollow Links", "Niche-Relevant Sites", "Basic Report", "Standard Delivery"]
    },
    {
      name: "Growth",
      price: "$599",
      features: ["15 High-Quality Backlinks", "Sites with DR 40+", "DoFollow Links", "Niche-Relevant Sites", "Detailed Report", "Fast Delivery", "Content Optimization"]
    },
    {
      name: "Enterprise",
      price: "$1499",
      features: ["40+ High-Quality Backlinks", "Sites with DR 50+", "DoFollow Links", "Niche-Relevant Sites", "Premium Report", "Express Delivery", "Dedicated Account Manager", "Unlimited Revisions"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Link Building Services</h1>
          <p>White-hat link building strategies that drive real SEO results</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Our Link Building Services</h2>
          <p className="section-subtitle">We build backlinks that matter for your search rankings</p>
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
          <h2 className="section-title">Link Building Packages</h2>
          <p className="section-subtitle">Choose the right package for your link building goals</p>
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
            Ready to Build Your Backlink Profile?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Join hundreds of businesses that trust Vefogix for their link building needs.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Get Started</Link>
        </div>
      </section>
    </>
  );
}
