import Link from "next/link";
import categories from "@/data/categories";

export default function AllCategories() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>All Categories</h1>
          <p>Browse websites by niche — find the perfect sites for your guest posts</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/all-categories/${cat.slug}`} className="card" style={{ textAlign: "center", padding: "32px 20px", textDecoration: "none" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{cat.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 4 }}>{cat.name}</h3>
                <p style={{ fontSize: ".85rem", color: "var(--text-muted)" }}>{cat.count.toLocaleString()} websites</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
