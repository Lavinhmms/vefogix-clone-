import Link from "next/link";

const steps = [
  { num: "1", title: "Sign Up", desc: "Create your free publisher account in under 2 minutes. Tell us about your website, niche, and traffic metrics." },
  { num: "2", title: "List Your Site", desc: "Add your website to our marketplace with your pricing, link types, and content guidelines. Set your own rates." },
  { num: "3", title: "Get Link Requests", desc: "Buyers browse our marketplace and submit link placement requests directly to you. Approve or decline each offer." },
  { num: "4", title: "Get Paid", desc: "Fulfill approved orders and receive payments securely. Withdraw your earnings anytime via PayPal or bank transfer." },
];

const benefits = [
  { icon: "\uD83D\uDCB5", title: "Passive Income", desc: "Earn money from content you\u2019ve already published. Add contextual links to existing posts and generate recurring revenue." },
  { icon: "\uD83D\uDCCB", title: "Set Your Own Rates", desc: "You control pricing. Charge based on your domain authority, traffic, and niche. Rates range from $5 to $500 per link." },
  { icon: "\uD83D\uDCC5", title: "Flexible Schedule", desc: "Work on your own time. Approve or reject requests based on your availability. No minimum commitments required." },
  { icon: "\uD83D\uDCB0", title: "Monthly Payments", desc: "Get paid reliably every month. We handle invoicing, collections, and payment processing so you can focus on content." },
];

const testimonials = [
  { name: "Sarah Mitchell", site: "TechPulse Blog", text: "I started listing my tech blog on Vefogix three months ago and it\u2019s been a game-changer. I\u2019ve earned over $1,200 with minimal effort, just by adding links to my existing articles. The buyers are professional and the payment process is seamless." },
  { name: "David Chen", site: "FinanceGuru", text: "As a finance blogger, I was skeptical about monetizing through backlinks. Vefogix made it easy and transparent. I set my rate at $150 per link and I\u2019ve been getting consistent requests. The platform handles everything from vetting to payout." },
  { name: "Emily Rodriguez", site: "HealthyLiving", text: "Vefogix connected me with high-quality buyers who respect my content standards. I\u2019ve earned over $3,000 in six months and my site\u2019s authority keeps growing. It\u2019s the best passive income stream I\u2019ve found as a publisher." },
];

const faqs = [
  {
    q: "How much can I earn as a publisher?",
    a: "Earnings vary based on your website\u2019s domain authority, traffic, and niche. Publishers typically earn $5 to $500 per link. Sites with DA 30+ and consistent traffic tend to attract higher-paying buyers. Many publishers earn $500\u2013$5,000 per month once they build a steady flow of requests.",
  },
  {
    q: "Do I need to create new content for each link?",
    a: "No. Most buyers are looking to add links to your existing content. You simply identify relevant posts in your archive and insert the buyer\u2019s link contextually. This makes the process quick and non-disruptive. Some buyers may request custom content, which you can charge a premium for.",
  },
  {
    q: "How do I get paid?",
    a: "Payments are processed monthly via PayPal or bank transfer. Vefogix handles all billing and collections so you never have to chase buyers for payment. Your earnings are deposited automatically once the funds are cleared. There are no hidden fees or minimum payout thresholds.",
  },
  {
    q: "Can I control which link requests I accept?",
    a: "Absolutely. You have full control over every request. You can review the buyer\u2019s URL, target keywords, and preferred anchor text before approving. If a request doesn\u2019t align with your content or guidelines, you can decline it with no penalty. Quality and relevance are always your choice.",
  },
  {
    q: "Will selling backlinks hurt my SEO?",
    a: "Not if done correctly. All links placed through Vefogix are contextual, relevant, and follow Google\u2019s quality guidelines. We vet buyers to ensure they are legitimate businesses with high-quality sites. You maintain editorial control, so you can reject any request that feels spammy or irrelevant to your audience.",
  },
];

export default function GetPaidToLinkPost() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Get Paid to Link Post</h1>
          <p>Earn money by adding links to your existing content</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-value">2,500+</div>
              <div className="stat-label">Publishers</div>
            </div>
            <div>
              <div className="stat-value">$5M+</div>
              <div className="stat-label">Paid Out</div>
            </div>
            <div>
              <div className="stat-value">4.8*</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Start earning in four simple steps
          </p>
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className="process-step" key={i}>
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Join as a Publisher?</h2>
          <p className="section-subtitle">
            Monetize your website on your own terms with zero risk
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

      {/* Pricing Guidance */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              How Much Can You Earn?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 40 }}>
              Publishers earn <strong style={{ color: "var(--text)" }}>$5\u2013$500 per link</strong> depending on
              their website\u2019s Domain Authority. Higher DA and traffic mean higher rates.
              Most publishers see a steady increase in requests and earnings as their site
              metrics grow.
            </p>
          </div>
          <div className="grid grid-3" style={{ textAlign: "center" }}>
            <div className="card" style={{ padding: "32px 20px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: 8 }}>
                $5\u2013$50
              </div>
              <p style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>DA 10\u201320</p>
            </div>
            <div className="card" style={{ padding: "32px 20px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: 8 }}>
                $50\u2013$200
              </div>
              <p style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>DA 20\u201340</p>
            </div>
            <div className="card" style={{ padding: "32px 20px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: 8 }}>
                $200\u2013$500
              </div>
              <p style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>DA 40+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Publishers Say</h2>
          <p className="section-subtitle">
            Hear from real publishers earning on Vefogix
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="avatar">{t.name[0]}</div>
                <div className="name">{t.name}</div>
                <div style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: 2 }}>{t.site}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about getting paid for link posts
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
            Start Earning Today
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,.7)",
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Join 2,500+ publishers already making money with Vefogix.
            Sign up free and start earning in minutes.
          </p>
          <Link
            href="/publishers/submit"
            className="btn btn-primary"
            style={{ fontSize: "1.05rem", padding: "14px 36px" }}
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
