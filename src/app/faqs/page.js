"use client";

import { useState } from "react";

const categories = ["General", "For Buyers", "For Publishers", "Payments"];

const faqs = [
  {
    category: "General",
    q: "What is guest posting?",
    a: "Guest posting, also called guest blogging, is the practice of writing and publishing an article on someone else's website or blog. It is a powerful content marketing strategy used to build backlinks, increase brand awareness, drive targeted traffic, and establish authority in your industry. Contributors typically include a bio or in-content link back to their own website."
  },
  {
    category: "General",
    q: "How does VefoGix work?",
    a: "VefoGix is a marketplace that connects buyers looking for guest posts with publishers who have websites accepting guest content. Buyers browse thousands of vetted websites, filter by metrics like DR, traffic, and price, purchase guest post spots, and submit their content. Publishers list their websites, set their pricing, and get paid when buyers purchase guest posts on their sites."
  },
  {
    category: "General",
    q: "Is VefoGix safe to use?",
    a: "Yes, VefoGix is completely safe and secure. We verify all publishers and websites listed on our platform to ensure quality and legitimacy. Our platform uses secure payment processing, and we have a dedicated support team to resolve any issues. We strictly enforce white-hat SEO practices to protect both buyers and publishers."
  },
  {
    category: "General",
    q: "Do I need an account to use VefoGix?",
    a: "Yes, you need to create a free account to use VefoGix. Registration is quick and straightforward. Once registered, buyers can browse the marketplace, purchase guest posts, and track orders. Publishers can list their websites, set pricing, and manage incoming orders."
  },
  {
    category: "General",
    q: "What types of websites are available on VefoGix?",
    a: "VefoGix offers a diverse range of websites across multiple niches including news and media, technology, business, health, lifestyle, finance, travel, sports, and many more. Each website listing includes detailed metrics such as Domain Rating (DR), Domain Authority (DA), traffic estimates, link type, pricing, and turnaround times."
  },
  {
    category: "General",
    q: "What is link building in SEO?",
    a: "Link building in SEO is the practice of acquiring hyperlinks from other websites to your own. It is one of the most critical ranking factors search engines use to determine a website's authority and relevance. Quality backlinks act as votes of confidence, signaling to Google and other search engines that your content is valuable and trustworthy."
  },
  {
    category: "For Buyers",
    q: "How do I buy a guest post?",
    a: "To buy a guest post on VefoGix, simply browse the marketplace, use filters to find websites that match your criteria (niche, DR, price, etc.), click on a website listing, and follow the checkout process. After payment, you can submit your article or request custom content writing from the publisher."
  },
  {
    category: "For Buyers",
    q: "How long does publication take?",
    a: "Publication times vary by publisher and are displayed on each website listing. Typical turnaround times range from 2 to 10 business days. Some publishers offer express delivery for an additional fee. You can track the status of your order directly from your dashboard."
  },
  {
    category: "For Buyers",
    q: "Can I get a refund?",
    a: "Yes, VefoGix offers a refund policy for eligible orders. If a publisher fails to publish your guest post within the agreed timeframe or does not meet the specified requirements, you may be eligible for a full refund. Please refer to our Refund Policy page for detailed terms and conditions."
  },
  {
    category: "For Buyers",
    q: "Can I choose my own anchor text and links?",
    a: "Yes, as a buyer you can specify your desired anchor text and target URLs when submitting your content. However, the final approval rests with the publisher, who may request changes if the links do not align with their editorial guidelines. Most publishers are flexible and will work with you to find a suitable arrangement."
  },
  {
    category: "For Buyers",
    q: "What is the difference between DoFollow and NoFollow links?",
    a: "DoFollow links pass link equity (link juice) from the linking site to the linked site, helping improve search engine rankings. NoFollow links include a rel='nofollow' attribute telling search engines not to pass link equity. While NoFollow links don't directly boost SEO, they still drive referral traffic and contribute to a natural backlink profile."
  },
  {
    category: "For Buyers",
    q: "How do I choose the right website for my guest post?",
    a: "Consider factors such as domain authority (DR/DA), relevance to your niche, traffic volume, audience engagement, link type offered, content quality standards, and turnaround times. Look for sites with DR 30+ for meaningful SEO value, ensure the site's content aligns with your industry, and verify the audience matches your target demographic."
  },
  {
    category: "For Buyers",
    q: "Can I order custom content writing?",
    a: "Many publishers on VefoGix offer custom content writing services as part of their guest post packages. When selecting a website, you can specify whether you will provide your own content or request the publisher to write it. Custom content writing typically incurs an additional fee, which is clearly displayed during checkout."
  },
  {
    category: "For Publishers",
    q: "How do I sell guest posts?",
    a: "To sell guest posts on VefoGix, create a publisher account, list your website with its metrics (DR, DA, traffic, etc.), set your pricing and guidelines, and start receiving orders from buyers. You have full control over which orders to accept, and payment is processed securely through the platform."
  },
  {
    category: "For Publishers",
    q: "How much can I earn selling guest posts?",
    a: "Earnings vary widely based on your website's domain authority, traffic, niche, and content quality. Publishers on VefoGix earn anywhere from $5 to $500+ per guest post. High-authority sites with DR 70+ and substantial traffic can command premium rates. You set your own prices and can adjust them at any time."
  },
  {
    category: "For Publishers",
    q: "How do I get paid?",
    a: "Publishers receive payments directly through VefoGix's secure payment system. Once a guest post order is completed and approved, the funds are released to your account. You can withdraw your earnings via PayPal, bank transfer, or other available payment methods. Withdrawal times vary by method."
  },
  {
    category: "For Publishers",
    q: "Can I reject an order?",
    a: "Yes, publishers have full discretion to accept or reject any order. If a buyer's content does not meet your quality standards, guidelines, or niche requirements, you can politely decline the order. It is recommended to set clear guidelines on your listing to minimize mismatched orders."
  },
  {
    category: "For Publishers",
    q: "How do I set my pricing?",
    a: "When listing your website, you can set your base price for a guest post. Consider your website's DR/DA, monthly traffic, niche demand, content quality, and the time required to publish. You can also offer add-on services like custom content writing, express publication, or social media promotion at additional costs."
  },
  {
    category: "Payments",
    q: "What payment methods do you accept?",
    a: "VefoGix accepts a wide range of payment methods including major credit and debit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely through encrypted payment gateways to protect your financial information."
  },
  {
    category: "Payments",
    q: "Is my payment information secure?",
    a: "Absolutely. VefoGix uses industry-standard SSL encryption to protect all data transmitted between your browser and our servers. We do not store full credit card numbers on our servers. All payment processing is handled by trusted third-party payment processors that comply with PCI DSS security standards."
  },
  {
    category: "Payments",
    q: "Are there any hidden fees?",
    a: "No, VefoGix believes in complete transparency. The price you see on a website listing is the price you pay. There are no hidden fees, subscription charges, or surprise costs. We do charge a nominal service fee to publishers for facilitating transactions, which is clearly disclosed."
  },
  {
    category: "Payments",
    q: "Can I get an invoice for my purchase?",
    a: "Yes, invoices are automatically generated for every transaction on VefoGix. You can download invoices from your account dashboard at any time. Each invoice includes detailed information about the purchase, including the website, price, date, and payment method."
  },
  {
    category: "Payments",
    q: "What is your refund policy?",
    a: "Our refund policy is designed to protect both buyers and publishers. If a publisher fails to deliver the agreed-upon service, you are eligible for a full refund. Refund requests must be submitted within 14 days of the expected delivery date. Please visit our Refund Policy page for complete details."
  }
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqs = faqs
    .map((faq, i) => ({ ...faq, index: i }))
    .filter((faq) => faq.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about guest posting and link building</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                style={{
                  padding: "10px 24px",
                  borderRadius: "var(--radius-sm)",
                  border: activeCategory === cat ? "none" : "1px solid var(--border)",
                  background: activeCategory === cat ? "var(--primary)" : "transparent",
                  color: activeCategory === cat ? "#fff" : "var(--text-muted)",
                  fontWeight: 600,
                  fontSize: ".9rem",
                  transition: "all .2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="faq-list">
            {filteredFaqs.map((faq) => (
              <div className="faq-item" key={faq.index}>
                <button
                  className={`faq-q ${openFaq === faq.index ? "open" : ""}`}
                  onClick={() => toggleFaq(faq.index)}
                >
                  <span>{faq.q}</span>
                  <span className="arrow">▼</span>
                </button>
                <div className={`faq-a ${openFaq === faq.index ? "open" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
