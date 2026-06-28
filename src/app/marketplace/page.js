"use client";

import { useState } from "react";
import websites from "@/data/websites";

const ITEMS_PER_PAGE = 10;

export default function MarketplacePage() {
  const [category, setCategory] = useState("All");
  const [linkType, setLinkType] = useState("All");
  const [country, setCountry] = useState("All");
  const [daMin, setDaMin] = useState("");
  const [daMax, setDaMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [page, setPage] = useState(1);

  const filtered = websites.filter((w) => {
    if (category !== "All" && w.category !== category) return false;
    if (linkType !== "All" && w.linkType !== linkType) return false;
    if (country !== "All" && w.country !== country) return false;
    if (daMin !== "" && w.dr < Number(daMin)) return false;
    if (daMax !== "" && w.dr > Number(daMax)) return false;
    if (priceMin !== "" && w.price < Number(priceMin)) return false;
    if (priceMax !== "" && w.price > Number(priceMax)) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paged = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const resetFilters = () => {
    setCategory("All");
    setLinkType("All");
    setCountry("All");
    setDaMin("");
    setDaMax("");
    setPriceMin("");
    setPriceMax("");
    setPage(1);
  };

  return (
    <>
      <section className="page-hero">
        <h1>Guest Post Marketplace</h1>
        <p>Browse 110K+ websites that accept guest posts. Filter by metrics, niche, and budget.</p>
      </section>

      <div className="marketplace-header">
        <h2>110883+ Websites & Blogs That Accept Guest Posts</h2>
        <button onClick={resetFilters}>Clear</button>
      </div>

      <div className="filter-bar">
        <select value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
          <option>All</option>
          <option>News and Media</option>
          <option>Technology</option>
          <option>Business</option>
          <option>General</option>
        </select>

        <select value={linkType} onChange={(e) => { setLinkType(e.target.value); setPage(1); }}>
          <option>All</option>
          <option>DoFollow</option>
          <option>NoFollow</option>
        </select>

        <select value={country} onChange={(e) => { setCountry(e.target.value); setPage(1); }}>
          <option>All</option>
          <option>WorldWide</option>
        </select>

        <input type="number" placeholder="DA Min" value={daMin} onChange={(e) => { setDaMin(e.target.value); setPage(1); }} />
        <input type="number" placeholder="DA Max" value={daMax} onChange={(e) => { setDaMax(e.target.value); setPage(1); }} />
        <input type="number" placeholder="Price Min" value={priceMin} onChange={(e) => { setPriceMin(e.target.value); setPage(1); }} />
        <input type="number" placeholder="Price Max" value={priceMax} onChange={(e) => { setPriceMax(e.target.value); setPage(1); }} />
      </div>

      <div className="website-grid">
        {paged.length === 0 && <p>No websites match your filters.</p>}
        {paged.map((w) => (
          <div key={w.id} className="website-card">
            <div className="website-top" title={w.domain}>
              <span className="website-domain">{w.domain.slice(0, 3)}...</span>
              <span className="website-price">Buy {w.price} USD</span>
            </div>
            <div className="website-meta">
              Max: {w.maxLinks} {w.linkType} Links • Turnaround: {w.turnaround} • Country: {w.country}
            </div>
            <div className="website-category">Category: {w.category}</div>
            <div className="metrics">
              <span>📊 {w.traffic}</span>
              <span>🔗 {w.dr}</span>
              <span>🏆 {w.da}</span>
              <span>📈 {w.as}</span>
            </div>
            <div className="website-links">
              Followed: {w.followed} | NoFollowed: {w.noFollowed}
            </div>
            <div className="website-footer">
              <span className="website-age">Age: {w.age}</span>
              <span className="website-deals">{w.deals} deals</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={currentPage <= 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage >= totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
      </div>

      <section className="section section-alt">
        <div className="cta-card">
          <h3>List Your Website</h3>
          <p>Start earning by listing your website on our marketplace. Reach thousands of buyers looking for quality guest post opportunities.</p>
          <button>Get Started</button>
        </div>
      </section>
    </>
  );
}
