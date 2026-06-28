import Link from "next/link";

const posts = [
  { title: "The Ultimate Guide to Guest Posting in 2026", excerpt: "Learn everything you need to know about guest posting, from finding opportunities to crafting the perfect pitch.", date: "Jun 15, 2026", author: "Nova", slug: "ultimate-guide-guest-posting" },
  { title: "How to Build High-Quality Backlinks in 2026", excerpt: "Discover the most effective white-hat link building strategies that actually work in today's SEO landscape.", date: "Jun 10, 2026", author: "Nova", slug: "high-quality-backlinks" },
  { title: "SEO Trends to Watch in 2026", excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape the search landscape this year.", date: "Jun 5, 2026", author: "Nova", slug: "seo-trends-2026" },
  { title: "The Publisher's Guide to Guest Post Marketplaces", excerpt: "How publishers can monetize their websites by selling guest posts on marketplace platforms.", date: "May 28, 2026", author: "Nova", slug: "publishers-guide-guest-post" },
  { title: "Link Building for E-commerce: A Complete Strategy", excerpt: "A comprehensive approach to building backlinks for online stores that drives rankings and revenue.", date: "May 20, 2026", author: "Nova", slug: "link-building-ecommerce" },
  { title: "Content Marketing vs Guest Posting: What's the Difference?", excerpt: "Understand the key differences and how to leverage both strategies for maximum SEO impact.", date: "May 12, 2026", author: "Nova", slug: "content-marketing-vs-guest-posting" },
];

export default function Blogs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>SEO tips, guest posting guides, and link building strategies</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((post) => (
              <article key={post.slug} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: 180, background: "linear-gradient(135deg, #1e3a8a, #06b6d4)", borderRadius: "var(--radius-sm)", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "2rem" }}>
                  📝
                </div>
                <div style={{ fontSize: ".8rem", color: "var(--text-muted)", marginBottom: 8 }}>{post.date} • {post.author}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 8, lineHeight: 1.4 }}>
                  <Link href={`/blogs/${post.slug}`} style={{ color: "inherit" }}>{post.title}</Link>
                </h2>
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="btn btn-outline" style={{ fontSize: ".85rem", padding: "8px 20px", marginTop: 16, alignSelf: "flex-start" }}>
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
