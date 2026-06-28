import Link from "next/link";

const tools = [
  { name: "XML Sitemap Extractor", desc: "Extract sitemaps from any website", icon: "🗺️" },
  { name: "SEO Checklist", desc: "Complete SEO audit checklist", icon: "✅" },
  { name: "Hyper Fill", desc: "Fill content gaps with AI", icon: "✍️" },
  { name: "Competitor Guest Post Checker", desc: "Find where competitors publish", icon: "🔍" },
  { name: "AMP Validator", desc: "Validate your AMP pages", icon: "⚡" },
  { name: "Backlink Generator", desc: "Generate quality backlinks", icon: "🔗" },
  { name: "Word Counter", desc: "Count words in your content", icon: "📝" },
  { name: "Keyword Density Checker", desc: "Check keyword density", icon: "📊" },
  { name: "Keyword Suggestions", desc: "Find related keywords", icon: "💡" },
  { name: "Schema Generator", desc: "Generate structured data", icon: "🏗️" },
  { name: "Schema Validator", desc: "Validate your schema markup", icon: "✔️" },
  { name: "Open Graph Generator", desc: "Generate OG meta tags", icon: "🖼️" },
  { name: "Twitter Card Generator", desc: "Generate Twitter card tags", icon: "🐦" },
  { name: "Bulk DA/PA Checker", desc: "Check domain authority in bulk", icon: "📈" },
  { name: "Bulk DR Checker", desc: "Check domain rating in bulk", icon: "📉" },
  { name: "Image Alt Text Checker", desc: "Check image alt attributes", icon: "🖼️" },
  { name: "Website Authority Checker", desc: "Check site authority metrics", icon: "🏆" },
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
                <Link href="#" className="btn btn-primary" style={{ fontSize: ".85rem", padding: "8px 20px" }}>
                  Use Tool
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
