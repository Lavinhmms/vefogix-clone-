"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cartCount } from "@/lib/cart";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartCount());
    function handleCartUpdate() {
      setCount(cartCount());
    }
    window.addEventListener("cart-updated", handleCartUpdate);
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo">
          Vefo<span>Gix</span>
        </Link>

        <nav className={`header-nav${menuOpen ? " open" : ""}`}>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/seo-tools">SEO Tools</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/publishers">Publishers</Link>
          <Link href="/buyers">Buyers</Link>
          <Link href="/cart" className="cart-link">🛒{count > 0 && <span className="cart-badge">{count}</span>}</Link>
        </nav>

        <div className="header-actions">
          <Link href="/signin" className="btn btn-outline">Sign In</Link>
          <Link href="/signin" className="btn btn-primary">Get Started</Link>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
