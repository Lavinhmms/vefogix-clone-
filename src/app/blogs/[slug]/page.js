import Link from "next/link";

const posts = {
  "ultimate-guide-guest-posting": {
    title: "The Ultimate Guide to Guest Posting in 2026",
    date: "Jun 15, 2026",
    author: "Nova",
    content: `Guest posting remains one of the most effective SEO strategies in 2026. When done correctly, it builds high-quality backlinks, drives targeted traffic, and establishes your authority in your niche.

## Why Guest Posting Still Works

Search engines continue to value editorial backlinks from authoritative websites. Guest posting allows you to earn these links naturally by providing valuable content to other publishers.

## Finding Guest Post Opportunities

The most efficient way to find guest post opportunities is through a guest post marketplace like VefoGix. These platforms connect you with vetted publishers who accept guest content.

## Crafting Your Pitch

When reaching out to publishers, personalize your pitch. Reference their recent content, explain why your article would benefit their audience, and provide clear topic suggestions.

## Writing Quality Content

Focus on creating content that provides genuine value. Well-researched, data-driven articles perform better and are more likely to be accepted by publishers.

## Measuring Results

Track your guest posting results using tools like Google Analytics, Ahrefs, and SEMrush. Monitor referral traffic, backlink quality, and search ranking improvements.`,
  },
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <section className="section" style={{ textAlign: "center", paddingTop: 100 }}>
        <div className="container">
          <h1 style={{ fontSize: "2rem", marginBottom: 16 }}>Post Not Found</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>The blog post you're looking for doesn't exist.</p>
          <Link href="/blogs" className="btn btn-primary">Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.6)", marginBottom: 8 }}>{post.date} • {post.author}</p>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} style={{ fontSize: "1.4rem", fontWeight: 700, marginTop: 40, marginBottom: 16 }}>{block.replace("## ", "")}</h2>;
              }
              return <p key={i} style={{ marginBottom: 16, color: "var(--text-muted)" }}>{block}</p>;
            })}
          </div>

          <div style={{ marginTop: 48, padding: 32, background: "var(--bg-alt)", borderRadius: "var(--radius)", textAlign: "center" }}>
            <h3 style={{ marginBottom: 12 }}>Ready to start guest posting?</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>Browse 110K+ websites and find the perfect match for your content.</p>
            <Link href="/marketplace" className="btn btn-primary">Explore Marketplace</Link>
          </div>

          <div style={{ marginTop: 32 }}>
            <Link href="/blogs" style={{ color: "var(--primary)" }}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
