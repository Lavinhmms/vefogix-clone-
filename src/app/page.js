"use client";

import { useState } from "react";
import Link from "next/link";
import websites from "@/data/websites";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("All");
  const [linkType, setLinkType] = useState("All");
  const [daMin, setDaMin] = useState("");
  const [daMax, setDaMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const resetFilters = () => {
    setCategory("All");
    setLanguage("All");
    setLinkType("All");
    setDaMin("");
    setDaMax("");
    setPriceMin("");
    setPriceMax("");
  };

  const filteredWebsites = websites.filter((site) => {
    if (category !== "All" && !site.category.includes(category)) return false;
    if (linkType !== "All" && site.linkType !== linkType) return false;
    if (daMin !== "" && site.dr < parseInt(daMin)) return false;
    if (daMax !== "" && site.dr > parseInt(daMax)) return false;
    if (priceMin !== "" && site.price < parseInt(priceMin)) return false;
    if (priceMax !== "" && site.price > parseInt(priceMax)) return false;
    return true;
  }).slice(0, 6);

  const truncateDomain = (domain) => {
    return domain.length > 12 ? domain.substring(0, 10) + "..." : domain;
  };

  const faqs = [
    {
      q: "What is guest posting in marketing?",
      a: "Guest posting also called guest blogging, is the process of writing and publishing an article on someone else's website or blog. It is a powerful marketing strategy used to build backlinks, increase brand awareness, and drive targeted traffic to your own site. By contributing valuable content to established platforms, you can tap into their existing audience and enhance your online authority. Guest posting is a cornerstone of content marketing and SEO because it helps create high-quality backlinks that search engines reward with higher rankings."
    },
    {
      q: "What are guest posting sites?",
      a: "Guest posting sites are websites that accept and publish content from external contributors. These sites typically have high domain authority, strong readership, and editorial guidelines that ensure published content meets their quality standards. The best guest posting sites are usually well-established blogs, news portals, and industry-specific publications that allow authors to include a backlink to their own website within the content, often in the author bio or within the article body."
    },
    {
      q: "How much does a guest post cost?",
      a: "The cost of a guest post varies significantly based on domain authority, traffic, niche, and the publication's reach. On average, guest posts range from $10 to $500+ per post. High-authority sites with DR 70+ may charge $50-$200, while premium publications like Forbes or TechCrunch can cost $500 or more. Factors that influence the price include link type (DoFollow vs NoFollow), exclusivity, content quality requirements, and the publication's overall reputation. Vefogix offers competitive rates across 70k+ websites."
    },
    {
      q: "How to sell guest posts?",
      a: "To sell guest posts, you can list your website on a guest post marketplace like Vefogix, set your pricing based on your site's domain authority and traffic, create detailed guidelines for guest post submissions, and manage orders through a streamlined platform. Many website owners monetize their sites by offering guest posting opportunities, earning anywhere from $10 to $500 per post depending on their site's metrics. Vefogix makes this process easy by connecting publishers with buyers seeking high-quality backlinks."
    },
    {
      q: "What is link building in SEO?",
      a: "Link building in SEO is the practice of acquiring hyperlinks from other websites to your own. It is one of the most critical ranking factors search engines use to determine a website's authority and relevance. Quality backlinks act as votes of confidence, signaling to Google and other search engines that your content is valuable and trustworthy. Effective link building strategies include guest posting, broken link building, creating linkable assets, digital PR, and outreach campaigns aimed at earning natural, high-quality backlinks from authoritative domains."
    },
    {
      q: "How to get high authority backlinks?",
      a: "To get high authority backlinks, focus on strategies such as creating exceptional content that naturally attracts links, guest posting on reputable sites in your industry, leveraging broken link building by finding dead links on high-authority pages and offering your content as a replacement, participating in expert roundups and interviews, and using digital PR to earn coverage from news outlets and major publications. Tools like SEMrush, Ahrefs, and Moz can help identify backlink opportunities and track your progress over time."
    },
    {
      q: "Does guest blogging still work?",
      a: "Yes, guest blogging still works exceptionally well in 2024 and beyond. While some outdated tactics like keyword-stuffed anchor text have lost effectiveness, high-quality guest posting remains a core SEO strategy. Google's algorithms continue to value natural, editorial backlinks from relevant, authoritative sources. The key to successful guest blogging today is focusing on value-driven content, building relationships with site owners, and earning contextual backlinks that fit naturally within the content. When done correctly, guest blogging drives referral traffic, builds brand authority, and improves search rankings."
    },
    {
      q: "Which platform is best for guest posting?",
      a: "Vefogix is considered the best platform for guest posting because it offers access to over 70,000 publishers and writers, AI-powered matching between buyers and sellers, transparent pricing, detailed website analytics including DR, DA, traffic metrics, and a streamlined order management system. Unlike other platforms, Vefogix provides real-time tracking of guest post campaigns, quality assurance, and dedicated support. Whether you are looking to buy guest posts to build backlinks or sell guest posting opportunities on your website, Vefogix provides a comprehensive marketplace solution."
    },
    {
      q: "What is the difference between DoFollow and NoFollow links?",
      a: "DoFollow links pass link equity (also called link juice) from the linking site to the linked site, helping improve the target site's search engine rankings. NoFollow links include a rel='nofollow' attribute that tells search engines not to pass link equity. While NoFollow links do not directly boost SEO rankings, they can still drive valuable referral traffic and contribute to a natural backlink profile. A balanced mix of DoFollow and NoFollow links is essential for a healthy, organic-looking link profile."
    },
    {
      q: "How do I choose the right website for my guest post?",
      a: "To choose the right website for your guest post, consider factors such as domain authority (DR/DA), relevance to your niche, traffic volume, audience engagement, link type offered (DoFollow vs NoFollow), content quality standards, and turnaround times. Look for sites with DR 30+ for meaningful SEO value, ensure the site's content aligns with your industry, and check that the audience matches your target demographic. Vefogix provides all these metrics for each listed website, making it easy to compare and select the best option for your campaign goals."
    }
  ];

  const features = [
    {
      icon: "\u270D\uFE0F",
      title: "High-Quality Content",
      desc: "We craft well-researched, engaging, and original content that resonates with your target audience and provides genuine value."
    },
    {
      icon: "\uD83D\uDD17",
      title: "White-Hat Backlink Strategies",
      desc: "Our link building techniques strictly follow search engine guidelines, ensuring sustainable and penalty-free SEO growth."
    },
    {
      icon: "\uD83D\uDCE6",
      title: "Private Label Services",
      desc: "White-label solutions for agencies and resellers looking to offer guest posting and link building services under their own brand."
    },
    {
      icon: "\uD83D\uDCC8",
      title: "Comprehensive Reporting",
      desc: "Get detailed reports with all the metrics that matter: backlinks acquired, traffic impact, rankings, and more."
    },
    {
      icon: "\uD83C\uDFAF",
      title: "Customised Approach",
      desc: "Every campaign is tailored to your specific goals, niche, and budget for maximum return on investment."
    },
    {
      icon: "\uD83D\uDE80",
      title: "SEO Optimization",
      desc: "We optimize every aspect of your guest posts \u2014 from anchor text to content structure \u2014 for maximum SEO impact."
    }
  ];

  const testimonials = [
    { name: "Nathan", date: "December 15, 2024", text: "I've been using Vefogix for 6 months and it has completely transformed my link building strategy. The quality of websites available is unmatched and the process is incredibly streamlined. Highly recommended for anyone serious about SEO." },
    { name: "Rachel", date: "November 28, 2024", text: "Vefogix made guest posting so easy! I was able to find high-authority sites in my niche within minutes. The customer support team was very responsive and helped me every step of the way." },
    { name: "Marcus", date: "January 10, 2025", text: "As an agency owner, I needed a reliable platform to scale my link building efforts. Vefogix delivered beyond expectations. The sheer number of publishers and filters make it a game-changer." },
    { name: "William", date: "February 5, 2025", text: "The transparency on Vefogix is incredible. Seeing real DR, DA, and traffic data before purchasing gives me confidence in every investment. My SERP rankings have improved dramatically." },
    { name: "Benjamin", date: "March 12, 2025", text: "What sets Vefogix apart is the quality of content and the professionalism of publishers. Every guest post I've ordered has been delivered on time with exceptional quality. Worth every penny." },
    { name: "Daniel", date: "April 2, 2025", text: "I was skeptical about guest posting marketplaces before trying Vefogix, but the results speak for themselves. My domain authority went from 32 to 48 in just 4 months. Incredible platform!" }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$99",
      features: ["2 Guest Posts", "Sites with DR 30+", "DoFollow Links", "1 Round of Revisions", "Standard Delivery (5-7 Days)", "Basic Report"]
    },
    {
      name: "Growth Package",
      price: "$249",
      features: ["5 Guest Posts", "Sites with DR 40+", "DoFollow Links", "2 Rounds of Revisions", "Fast Delivery (3-5 Days)", "Detailed Report", "Content Optimization"]
    },
    {
      name: "Enterprise Package",
      price: "$499",
      features: ["12 Guest Posts", "Sites with DR 50+", "DoFollow Links", "Unlimited Revisions", "Express Delivery (1-3 Days)", "Premium Report", "Content Optimization", "Dedicated Account Manager"]
    }
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <h1>
            AI-Powered Link Building and{" "}
            <span>Guest Post Marketplace</span>
          </h1>
          <p>Distribute on 70k+ Websites Across the Globe!</p>
          <div className="hero-actions">
            <Link href="/marketplace" className="btn btn-primary">
              Explore Marketplace
            </Link>
            <Link
              href="/register"
              className="btn btn-outline"
              style={{ borderColor: "rgba(255,255,255,.4)", color: "#fff" }}
            >
              List Your Website
            </Link>
          </div>
          <div className="hero-search">
            <input type="text" placeholder="AI Search" />
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-value">110K+</div>
              <div className="stat-label">Registered Websites</div>
            </div>
            <div>
              <div className="stat-value">70K+</div>
              <div className="stat-label">Publishers &amp; Writers</div>
            </div>
            <div>
              <div className="stat-value">1M+</div>
              <div className="stat-label">Tasks Completed</div>
            </div>
            <div>
              <div className="stat-value">24 X 7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partners Logos */}
      <section className="partners">
        <div className="container">
          <div className="partners-grid" style={{ gap: 40 }}>
            {["WRanker", "Semrush", "Majestic", "Google Analytics", "Ahrefs", "Moz"].map((name) => (
              <span
                key={name}
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-muted)",
                  opacity: 0.5,
                  letterSpacing: "0.5px"
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Marketplace Preview */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Marketplace</h2>
          <p className="section-subtitle">
            Browse thousands of websites ready for guest posting opportunities
          </p>
          <div className="marketplace-header">
            <div className="filter-bar">
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="News">News</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
              </select>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="All">All Languages</option>
                <option value="English">English</option>
              </select>
              <select value={linkType} onChange={(e) => setLinkType(e.target.value)}>
                <option value="All">All Link Types</option>
                <option value="DoFollow">DoFollow</option>
                <option value="NoFollow">NoFollow</option>
              </select>
              <input
                type="number"
                placeholder="DA Min"
                value={daMin}
                onChange={(e) => setDaMin(e.target.value)}
                style={{ width: 80 }}
              />
              <input
                type="number"
                placeholder="DA Max"
                value={daMax}
                onChange={(e) => setDaMax(e.target.value)}
                style={{ width: 80 }}
              />
              <input
                type="number"
                placeholder="Price Min"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                style={{ width: 90 }}
              />
              <input
                type="number"
                placeholder="Price Max"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                style={{ width: 90 }}
              />
              <button
                className="btn btn-primary"
                onClick={resetFilters}
                style={{ padding: "8px 16px", fontSize: ".85rem" }}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="grid grid-2">
            {filteredWebsites.map((site) => (
              <div className="website-card" key={site.id}>
                <div className="website-card-top">
                  <span className="domain">{truncateDomain(site.domain)}</span>
                  <span className="price">Buy {site.price} USD</span>
                </div>
                <div className="meta">
                  <span>Max Links: {site.maxLinks}</span>
                  <span>Type: {site.linkType}</span>
                  <span>Turnaround: {site.turnaround}</span>
                  <span>Country: {site.country}</span>
                </div>
                <div className="meta">
                  <span className="tag">{site.category}</span>
                  <span>{'\uD83D\uDCCA'} {site.traffic}</span>
                </div>
                <div className="metrics">
                  <div className="metric">DR: <strong>{site.dr}</strong></div>
                  <div className="metric">DA: <strong>{site.da}</strong></div>
                  <div className="metric">AS: <strong>{site.as}</strong></div>
                  <div className="metric">Followed: <strong>{site.followed}</strong></div>
                  <div className="metric">NoFollowed: <strong>{site.noFollowed}</strong></div>
                  <div className="metric">Age: <strong>{site.age}</strong></div>
                  <div className="metric">Deals: <strong>{site.deals}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Service / Featured On */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get Featured On</h2>
          <p className="section-subtitle">
            Publish your content on the most trusted and authoritative publications
          </p>
          <div className="featured-grid">
            {["AP News", "Digital Journal", "APSense", "Big News Network", "Business Insider", "USA Today", "Yahoo News", "Chicago Tribune"].map((name) => (
              <span key={name} className="tag" style={{ fontSize: ".9rem", padding: "8px 20px" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Packages */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Packages</h2>
          <p className="section-subtitle">
            Choose the perfect package for your link building needs
          </p>
          <div className="grid grid-3">
            {packages.map((pkg, i) => (
              <div
                className="card"
                key={i}
                style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
              >
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
                  {pkg.name}
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: 24
                  }}
                >
                  {pkg.price}
                </div>
                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: 24, flex: 1 }}>
                  {pkg.features.map((f, fi) => (
                    <li
                      key={fi}
                      style={{
                        padding: "8px 0",
                        fontSize: ".9rem",
                        color: "var(--text-muted)",
                        borderBottom: fi < pkg.features.length - 1 ? "1px solid var(--border)" : "none"
                      }}
                    >
                      {'\u2713'} {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/marketplace"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process Steps */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get started in just 4 simple steps</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="num">1</div>
              <h3>Discover Websites</h3>
              <p>
                Browse our marketplace, filter by DR, traffic, niche, and find the
                perfect site for your guest post.
              </p>
            </div>
            <div className="process-step">
              <div className="num">2</div>
              <h3>Select Your Match</h3>
              <p>
                Pick the website that best fits your campaign goals and add it to your order.
              </p>
            </div>
            <div className="process-step">
              <div className="num">3</div>
              <h3>Customize Your Order</h3>
              <p>
                Specify your content requirements, target keywords, and any special instructions.
              </p>
            </div>
            <div className="process-step">
              <div className="num">4</div>
              <h3>Finalize and Track</h3>
              <p>
                Complete your purchase and track the progress of your guest post from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We deliver results that matter for your business
          </p>
          <div className="features-grid">
            {features.map((feat, i) => (
              <div className="feature-card card" key={i}>
                <div className="icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from marketers and agencies who trust Vefogix
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="avatar">{t.name[0]}</div>
                <div className="name">{t.name}</div>
                <div className="date">{t.date}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about guest posting and link building
          </p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-q ${openFaq === i ? "open" : ""}`}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <span className="arrow">{'\u25BC'}</span>
                </button>
                <div className={`faq-a ${openFaq === i ? "open" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question or want to partner with us? Get in touch!
          </p>
          <div className="contact-section">
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>
                Let&apos;s get in touch
              </h3>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "2rem" }}>{'\uD83D\uDED2'}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Buyer</div>
                    <div style={{ fontSize: ".85rem", color: "var(--text-muted)" }}>
                      Looking for guest posts
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "2rem" }}>{'\uD83D\uDCF0'}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>Publisher</div>
                    <div style={{ fontSize: ".85rem", color: "var(--text-muted)" }}>
                      Sell guest post spots
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                Whether you&apos;re looking to buy high-quality guest posts or want to
                monetize your website by selling guest posting opportunities, we&apos;re
                here to help. Reach out to our team and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <div style={{ display: "flex", gap: 8 }}>
                  <span
                    style={{
                      padding: "12px 16px",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--bg-alt)",
                      fontSize: ".9rem",
                      fontWeight: 500
                    }}
                  >
                    +1
                  </span>
                  <input type="tel" placeholder="Phone Number" style={{ flex: 1 }} />
                </div>
                <select>
                  <option value="">Company Size</option>
                  <option value="1-49">1-49</option>
                  <option value="50-99">50-99</option>
                  <option value="100-249">100-249</option>
                  <option value="250-999">250-999</option>
                  <option value="1000+">1000+</option>
                </select>
                <select>
                  <option value="">Select Goal</option>
                  <option value="backlink">Grow backlink profile</option>
                  <option value="serp">Reach higher SERP</option>
                  <option value="clients">Build links for clients</option>
                  <option value="brand">Grow brand awareness</option>
                  <option value="indexed">Get more pages indexed</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" />
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: ".85rem",
                    color: "var(--text-muted)"
                  }}
                >
                  <input type="checkbox" /> I agree to the{" "}
                  <Link href="/terms" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                    Privacy Policy
                  </Link>
                </label>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a, #0f172a)",
          padding: "80px 0",
          textAlign: "center"
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16
            }}
          >
            Link Building services at your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Fingertips!
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,.7)",
              maxWidth: 600,
              margin: "0 auto 32px"
            }}
          >
            Join thousands of marketers and publishers already using Vefogix to grow
            their online presence.
          </p>
          <Link
            href="/register"
            className="btn btn-primary"
            style={{ fontSize: "1.05rem", padding: "14px 36px" }}
          >
            Join Vefogix
          </Link>
        </div>
      </section>
    </>
  );
}
