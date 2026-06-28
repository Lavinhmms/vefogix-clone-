import Link from "next/link";

export default function SeoResellerServices() {
  const benefits = [
    { title: "White-Label Delivery", desc: "All services are delivered under your brand, so your clients never know we are behind the scenes." },
    { title: "Scalable Solutions", desc: "Easily scale from a few clients to dozens without hiring additional staff." },
    { title: "Dedicated Support", desc: "Get a dedicated account manager and priority support for all your campaigns." },
    { title: "Competitive Pricing", desc: "Enjoy wholesale pricing that allows you to maintain healthy margins." }
  ];

  const packages = [
    {
      name: "Agency",
      price: "$999",
      features: ["Up to 5 Clients", "White-Label Reports", "Guest Posting Services", "Link Building Services", "Content Marketing", "Email Support", "Basic Analytics"]
    },
    {
      name: "Enterprise",
      price: "$2499",
      features: ["Up to 20 Clients", "White-Label Reports", "Guest Posting Services", "Link Building Services", "Content Marketing", "Priority Support", "Advanced Analytics", "Dedicated Account Manager"]
    },
    {
      name: "Unlimited",
      price: "$4999",
      features: ["Unlimited Clients", "White-Label Reports", "Guest Posting Services", "Link Building Services", "Content Marketing", "24/7 Priority Support", "Advanced Analytics", "Dedicated Account Manager", "Custom Integrations"]
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>SEO Reseller Services</h1>
          <p>White-label SEO services for agencies</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Partner With Us?</h2>
          <p className="section-subtitle">Grow your agency without the overhead of hiring in-house experts</p>
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
          <h2 className="section-title">Reseller Packages</h2>
          <p className="section-subtitle">Choose the plan that fits your agency size and needs</p>
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
            Ready to Scale Your Agency?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Partner with Vefogix and offer white-label SEO services to your clients today.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Get Started</Link>
        </div>
      </section>
    </>
  );
}
