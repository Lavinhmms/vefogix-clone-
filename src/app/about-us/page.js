import Link from "next/link";

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    description: "With over 15 years in digital marketing and SEO, Sarah founded VefoGix to bridge the gap between publishers and buyers seeking high-quality guest posting opportunities."
  },
  {
    name: "James Chen",
    role: "Chief Technology Officer",
    description: "James leads our engineering team, building AI-powered tools that match buyers with the perfect publishers. He previously led engineering at multiple SaaS companies."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Publisher Relations",
    description: "Emily oversees our network of 70K+ publishers, ensuring quality standards and fostering long-term partnerships. She brings 10+ years of experience in partnership management."
  }
];

const values = [
  { title: "Transparency", description: "We believe in clear, honest communication and transparent pricing with no hidden fees." },
  { title: "Quality First", description: "Every guest post on our platform meets rigorous quality standards to deliver real SEO value." },
  { title: "Innovation", description: "We continuously invest in AI and automation to make guest posting faster and more effective." },
  { title: "Community", description: "We foster a thriving community of publishers, buyers, and content creators." },
  { title: "Integrity", description: "We strictly follow white-hat SEO practices to ensure sustainable, penalty-free growth." },
  { title: "Support", description: "Our dedicated support team is available 24/7 to help you every step of the way." }
];

export default function AboutUs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about VefoGix and our mission</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16 }}>Our Story</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                VefoGix was founded in 2020 with a simple vision: to make guest posting accessible,
                transparent, and effective for businesses of all sizes. What started as a small
                marketplace connecting a handful of publishers with buyers has grown into one of the
                largest guest post platforms in the world, serving over 70,000 publishers and 110,000
                websites.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Our team of SEO experts, engineers, and content strategists works tirelessly to ensure
                that every guest post published through our platform delivers measurable results. We
                have facilitated over 1 million guest post transactions and helped thousands of
                businesses improve their search engine rankings through high-quality backlinks.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: 48 }}>
              <div style={{ fontSize: "4rem", marginBottom: 16 }}>🚀</div>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Since 2020</h3>
              <p style={{ color: "var(--text-muted)" }}>Growing the guest posting ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="section-title">Our Mission</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
            Our mission is to democratize link building by providing a seamless, AI-powered platform
            that connects content creators with publishers. We strive to eliminate the complexity
            and opacity traditionally associated with guest posting, making it easy for anyone to
            build high-quality backlinks, grow their online authority, and achieve sustainable SEO
            success. We are committed to maintaining the highest standards of quality, transparency,
            and integrity in everything we do.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the people behind VefoGix</p>
          <div className="grid grid-3">
            {team.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: "center", padding: 32 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 700,
                    margin: "0 auto 16px"
                  }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>{member.name}</h3>
                <div style={{ color: "var(--primary)", fontSize: ".85rem", fontWeight: 600, marginBottom: 12 }}>{member.role}</div>
                <p style={{ color: "var(--text-muted)", fontSize: ".9rem", lineHeight: 1.7 }}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="grid grid-3">
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: 28 }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: ".9rem", lineHeight: 1.7 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-value">110K+</div>
              <div className="stat-label">Websites</div>
            </div>
            <div>
              <div className="stat-value">70K+</div>
              <div className="stat-label">Publishers</div>
            </div>
            <div>
              <div className="stat-value">1M+</div>
              <div className="stat-label">Tasks</div>
            </div>
            <div>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle">Join thousands of marketers and publishers using VefoGix</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/marketplace" className="btn btn-primary">Browse Marketplace</Link>
            <Link href="/contact-us" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
