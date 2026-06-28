import Link from "next/link";

export default function ForAgencies() {
  const benefits = [
    { title: "White-Label Delivery", desc: "All services are delivered under your brand. Your clients will never know we are the ones delivering the work." },
    { title: "Scalable Solutions", desc: "Scale from 1 to 100+ clients with ease. Our infrastructure grows with your agency." },
    { title: "Dedicated Support", desc: "You get a dedicated account manager and priority support to ensure smooth operations." },
    { title: "Competitive Pricing", desc: "Enjoy wholesale rates that let you set your own margins and maximize profitability." }
  ];

  const steps = [
    { num: "1", title: "Sign Up", desc: "Create your free agency account and get access to our platform and pricing." },
    { num: "2", title: "Choose Services", desc: "Select from our full range of white-label SEO, link building, and content services." },
    { num: "3", title: "Add Your Clients", desc: "Onboard your clients and we will handle the rest under your brand name." },
    { num: "4", title: "Track & Report", desc: "Monitor progress with white-label reports and dashboards you can share with clients." }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>For Agencies</h1>
          <p>Scale your agency with our white-label SEO and link building services</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Partner With Vefogix</h2>
          <p className="section-subtitle">Everything you need to grow your agency without the overhead</p>
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get started in just 4 simple steps</p>
          <div className="process-steps">
            {steps.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e3a8a, #0f172a)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Ready to Grow Your Agency?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)", maxWidth: 600, margin: "0 auto 32px" }}>
            Join hundreds of agencies that trust Vefogix for white-label SEO and link building.
          </p>
          <Link href="/signin" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "14px 36px" }}>Sign Up Now</Link>
        </div>
      </section>
    </>
  );
}
