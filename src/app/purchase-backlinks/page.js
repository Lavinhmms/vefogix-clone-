import Link from "next/link";

const benefits = [
  { icon: "\uD83D\uDD17", title: "High DA Sites", desc: "All backlinks come from websites with Domain Authority 30+, ensuring maximum SEO impact for your rankings." },
  { icon: "\u26A1", title: "Fast Turnaround", desc: "Most orders are fulfilled within 2 days. Get your backlinks live and indexed quickly to see results faster." },
  { icon: "\u2705", title: "White Hat Only", desc: "We strictly follow Google Webmaster Guidelines. No PBNs, no spam, no risk of penalties. 100% ethical link building." },
  { icon: "\uD83D\uDCB0", title: "Bulk Discounts", desc: "The more backlinks you buy, the less you pay per link. Scale your campaigns while lowering your cost per acquisition." },
];

const packages = [
  {
    name: "Starter",
    backlinks: 5,
    price: 149,
    perLink: 29.80,
    features: [
      "DoFollow Backlinks",
      "High DA 30+ Sites",
      "2 Day Turnaround",
      "Dedicated Account Manager",
      "Monthly Report",
    ],
    popular: false,
  },
  {
    name: "Basic",
    backlinks: 15,
    price: 399,
    perLink: 26.60,
    features: [
      "DoFollow Backlinks",
      "High DA 30+ Sites",
      "2 Day Turnaround",
      "Dedicated Account Manager",
      "Monthly Report",
      "Anchor Text Optimization",
    ],
    popular: false,
  },
  {
    name: "Standard",
    backlinks: 30,
    price: 699,
    perLink: 23.30,
    features: [
      "DoFollow Backlinks",
      "High DA 30+ Sites",
      "2 Day Turnaround",
      "Dedicated Account Manager",
      "Monthly Report",
      "Anchor Text Optimization",
      "Content Integration",
    ],
    popular: true,
  },
  {
    name: "Premium",
    backlinks: 60,
    price: 1199,
    perLink: 19.98,
    features: [
      "DoFollow Backlinks",
      "High DA 30+ Sites",
      "2 Day Turnaround",
      "Dedicated Account Manager",
      "Monthly Report",
      "Anchor Text Optimization",
      "Content Integration",
      "Priority Support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    backlinks: 150,
    price: 2499,
    perLink: 16.66,
    features: [
      "DoFollow Backlinks",
      "High DA 30+ Sites",
      "2 Day Turnaround",
      "Dedicated Account Manager",
      "Monthly Report",
      "Anchor Text Optimization",
      "Content Integration",
      "Priority Support",
      "Custom Outreach Strategy",
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: "Are these DoFollow or NoFollow backlinks?",
    a: "All backlinks in our packages are DoFollow, which means they pass link equity directly to your site. DoFollow links are the gold standard for SEO because search engines count them as votes of authority. Every link we build is contextually placed within relevant content to maximize its value.",
  },
  {
    q: "What domain authority can I expect?",
    a: "We only build backlinks on websites with Domain Authority (DA) of 30 or higher. Many of our partner sites have DA 40\u201370+. All sites are vetted for quality, traffic, and relevance before any link is placed. You can view full metrics for each site before purchasing.",
  },
  {
    q: "How quickly will I see results?",
    a: "Backlinks are typically live within 2 business days. Once live, indexing usually takes another 24\u201372 hours. Many clients see ranking improvements within 2\u20134 weeks, though results vary based on your site\u2019s current authority, competition, and the keywords being targeted.",
  },
  {
    q: "Do you offer refunds if I\u2019m not satisfied?",
    a: "Yes, we stand behind the quality of our service. If a backlink is not delivered as promised, we will either replace it with an equivalent or better site or issue a full refund for that link. Our support team is available 24/7 to address any concerns.",
  },
];

export default function PurchaseBacklinks() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Purchase Backlinks</h1>
          <p>Buy high-quality backlinks from authoritative websites</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Buy Backlinks From Us?</h2>
          <p className="section-subtitle">
            Every link is manually placed on real, authoritative websites with genuine traffic
          </p>
          <div className="grid grid-4">
            {benefits.map((b, i) => (
              <div className="card" key={i} style={{ textAlign: "center", padding: "32px 20px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Choose Your Package</h2>
          <p className="section-subtitle">
            Pick the package that fits your budget and scale your link building campaign
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {packages.map((pkg, i) => (
              <div
                className="card"
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  border: pkg.popular ? "2px solid var(--primary)" : undefined,
                }}
              >
                {pkg.popular && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: -28,
                      background: "var(--primary)",
                      color: "#fff",
                      fontSize: ".7rem",
                      fontWeight: 700,
                      padding: "4px 32px",
                      transform: "rotate(45deg)",
                    }}
                  >
                    POPULAR
                  </span>
                )}
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 4 }}>{pkg.name}</h3>
                <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginBottom: 12 }}>
                  {pkg.backlinks} backlinks
                </p>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)", marginBottom: 4 }}>
                  ${pkg.price}
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginBottom: 20 }}>
                  ${pkg.perLink.toFixed(2)}/link
                </p>
                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: 24, flex: 1 }}>
                  {pkg.features.map((f, fi) => (
                    <li
                      key={fi}
                      style={{
                        padding: "6px 0",
                        fontSize: ".82rem",
                        color: "var(--text-muted)",
                        borderBottom: fi < pkg.features.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      {"\u2713"} {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/marketplace"
                  className={`btn ${pkg.popular ? "btn-primary" : "btn-outline"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about purchasing backlinks
          </p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={i}>
                <summary className="faq-q" style={{ cursor: "pointer" }}>
                  <span>{faq.q}</span>
                  <span className="arrow">{"\u25BC"}</span>
                </summary>
                <div className="faq-a" style={{ maxHeight: "none", paddingBottom: 20 }}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Ready to Boost Your Rankings?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,.7)",
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Join thousands of marketers who trust Vefogix for high-quality backlinks
            that deliver real SEO results.
          </p>
          <Link
            href="/marketplace"
            className="btn btn-primary"
            style={{ fontSize: "1.05rem", padding: "14px 36px" }}
          >
            Browse Marketplace
          </Link>
        </div>
      </section>
    </>
  );
}
