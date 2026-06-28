import Link from "next/link";

const tools = [
  { name: "XML Sitemap Extractor", desc: "Extract sitemaps from any website", icon: "🗺️", slug: "sitemap-extractor" },
  { name: "SEO Checklist", desc: "Complete SEO audit checklist", icon: "✅", slug: "seo-checklist" },
  { name: "Hyper Fill", desc: "Fill content gaps with AI", icon: "✍️", slug: "hyper-fill" },
  { name: "Competitor Guest Post Checker", desc: "Find where competitors publish", icon: "🔍", slug: "competitor-guestpost-checker" },
  { name: "AMP Validator", desc: "Validate your AMP pages", icon: "⚡", slug: "amp-validator" },
  { name: "Backlink Generator", desc: "Generate quality backlinks", icon: "🔗", slug: "backlink-generator" },
  { name: "Word Counter", desc: "Count words in your content", icon: "📝", slug: "word-counter" },
  { name: "Keyword Density Checker", desc: "Check keyword density", icon: "📊", slug: "keyword-density-checker" },
  { name: "Keyword Suggestions", desc: "Find related keywords", icon: "💡", slug: "keyword-suggestions" },
  { name: "Schema Generator", desc: "Generate structured data", icon: "🏗️", slug: "schema-generator" },
  { name: "Schema Validator", desc: "Validate your schema markup", icon: "✔️", slug: "schema-validator" },
  { name: "Open Graph Generator", desc: "Generate OG meta tags", icon: "🖼️", slug: "opengraph-generator" },
  { name: "Twitter Card Generator", desc: "Generate Twitter card tags", icon: "🐦", slug: "twitter-card-generator" },
  { name: "Bulk DA/PA Checker", desc: "Check domain authority in bulk", icon: "📈", slug: "bulk-da-pa-checker" },
  { name: "Bulk DR Checker", desc: "Check domain rating in bulk", icon: "📉", slug: "bulk-dr-checker" },
  { name: "Image Alt Text Checker", desc: "Check image alt attributes", icon: "🖼️", slug: "image-alt-checker" },
  { name: "Website Authority Checker", desc: "Check site authority metrics", icon: "🏆", slug: "authority-checker" },
];

export default function SEOTools() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Free SEO Tools</h1>
          <p>17+ powerful SEO tools to help you optimize your website and improve rankings</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {tools.map((tool) => (
              <div key={tool.name} className="card" style={{ textAlign: "center", padding: "32px 24px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{tool.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{tool.name}</h3>
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", marginBottom: 16 }}>{tool.desc}</p>
                {tool.slug ? (
                  <Link href={`/seo-tools/${tool.slug}`} className="btn btn-primary" style={{ fontSize: ".85rem", padding: "8px 20px" }}>
                    Use Tool
                  </Link>
                ) : (
                  <button className="btn btn-primary" style={{ fontSize: ".85rem", padding: "8px 20px", opacity: 0.6, cursor: "not-allowed" }} disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
