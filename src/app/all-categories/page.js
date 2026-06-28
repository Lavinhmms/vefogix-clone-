import Link from "next/link";

const categories = [
  { name: "Agriculture", slug: "agriculture-write-for-us", count: 1240, icon: "🌾" },
  { name: "Business", slug: "business-write-for-us", count: 15200, icon: "💼" },
  { name: "Casino", slug: "casino-write-for-us", count: 890, icon: "🎰" },
  { name: "Education", slug: "education-write-for-us", count: 4300, icon: "📚" },
  { name: "General", slug: "general-write-for-us", count: 28500, icon: "📋" },
  { name: "Home Improvement", slug: "home-improvement-write-for-us", count: 3200, icon: "🔨" },
  { name: "Digital Marketing", slug: "digital-marketing-write-for-us", count: 9800, icon: "📱" },
  { name: "Technology", slug: "technology-write-for-us", count: 12100, icon: "💻" },
  { name: "Travel", slug: "travel-write-for-us", count: 5600, icon: "✈️" },
  { name: "Health", slug: "health-write-for-us", count: 6700, icon: "🏥" },
  { name: "Finance", slug: "finance-write-for-us", count: 8900, icon: "💰" },
  { name: "Real Estate", slug: "real-estate-write-for-us", count: 3400, icon: "🏠" },
  { name: "Sports", slug: "sports-write-for-us", count: 4100, icon: "⚽" },
  { name: "Fashion", slug: "fashion-write-for-us", count: 2800, icon: "👗" },
  { name: "Food", slug: "food-write-for-us", count: 3600, icon: "🍽️" },
  { name: "Gaming", slug: "gaming-write-for-us", count: 2200, icon: "🎮" },
];

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
              <Link key={cat.slug} href={`/marketplace?category=${cat.name}`} className="card" style={{ textAlign: "center", padding: "32px 20px", textDecoration: "none" }}>
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
