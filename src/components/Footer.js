import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="header-logo" style={{ color: "#fff" }}>
              Vefo<span style={{ color: "rgba(255,255,255,.6)" }}>Gix</span>
            </Link>
            <p>
              Top #1 SEO & Guest Post Agency. We think about converting ideas
              into success through innovative solutions and cutting-edge
              technology.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/link-building">Link Building</Link>
            <Link href="/guest-posting">Guest Posting</Link>
            <Link href="/content-marketing">Content Marketing</Link>
            <Link href="/seo-reseller">SEO Reseller</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/seo-tools">SEO Tools</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact-us">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:nova@vefogix.com">nova@vefogix.com</a>
            <a href="tel:+18288000589">+1 828-800-0589</a>
            <p style={{ fontSize: ".85rem", marginTop: 8 }}>
              USA - 30N Gould St, STE R, Sheridan, WY 82801
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 All Rights Reserved by Vefogix</span>
          <div className="payment-icons">
            <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,.5)" }}>
              PayPal • Stripe • Visa • Mastercard • Crypto
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
