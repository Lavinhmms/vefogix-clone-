import categories from "@/data/categories";
import Link from "next/link";

const mockWebsites = {
  Agriculture: [
    { id: 101, domain: "agrifarmingtips.com", price: 25, dr: 42, da: 38, traffic: "124.5K", linkType: "DoFollow" },
    { id: 102, domain: "modernfarmer.net", price: 30, dr: 48, da: 44, traffic: "210.3K", linkType: "DoFollow" },
    { id: 103, domain: "sustainableag.org", price: 20, dr: 35, da: 32, traffic: "95.1K", linkType: "NoFollow" },
    { id: 104, domain: "cropjournal.com", price: 28, dr: 45, da: 40, traffic: "156.7K", linkType: "DoFollow" },
    { id: 105, domain: "livestockdaily.com", price: 22, dr: 38, da: 35, traffic: "112.4K", linkType: "DoFollow" },
    { id: 106, domain: "agritechnews.com", price: 35, dr: 52, da: 48, traffic: "278.9K", linkType: "NoFollow" },
  ],
  Business: [
    { id: 201, domain: "startupvalley.com", price: 45, dr: 58, da: 52, traffic: "345.2K", linkType: "DoFollow" },
    { id: 202, domain: "ceoinsights.net", price: 55, dr: 65, da: 60, traffic: "412.8K", linkType: "DoFollow" },
    { id: 203, domain: "marketwatchblog.com", price: 40, dr: 55, da: 50, traffic: "298.5K", linkType: "NoFollow" },
    { id: 204, domain: "entrepreneurhub.org", price: 50, dr: 62, da: 58, traffic: "387.1K", linkType: "DoFollow" },
    { id: 205, domain: "corporatestrategy.io", price: 60, dr: 70, da: 65, traffic: "523.6K", linkType: "NoFollow" },
    { id: 206, domain: "smallbizwire.com", price: 35, dr: 48, da: 44, traffic: "256.3K", linkType: "DoFollow" },
  ],
  Casino: [
    { id: 301, domain: "slotguru.net", price: 30, dr: 40, da: 36, traffic: "189.4K", linkType: "DoFollow" },
    { id: 302, domain: "pokerstrategy.com", price: 40, dr: 50, da: 46, traffic: "267.8K", linkType: "NoFollow" },
    { id: 303, domain: "casinoreview.org", price: 25, dr: 35, da: 32, traffic: "145.2K", linkType: "DoFollow" },
    { id: 304, domain: "blackjackdaily.com", price: 35, dr: 45, da: 41, traffic: "234.5K", linkType: "DoFollow" },
    { id: 305, domain: "vegasslotsonline.com", price: 28, dr: 38, da: 34, traffic: "178.9K", linkType: "NoFollow" },
    { id: 306, domain: "bettinginsider.net", price: 32, dr: 42, da: 39, traffic: "201.3K", linkType: "DoFollow" },
  ],
  Education: [
    { id: 401, domain: "onlinelearninghub.com", price: 20, dr: 45, da: 40, traffic: "312.5K", linkType: "DoFollow" },
    { id: 402, domain: "teachbetter.org", price: 18, dr: 38, da: 34, traffic: "198.7K", linkType: "DoFollow" },
    { id: 403, domain: "edtechinsider.com", price: 28, dr: 52, da: 48, traffic: "423.1K", linkType: "NoFollow" },
    { id: 404, domain: "studyabroadguide.net", price: 22, dr: 42, da: 38, traffic: "267.4K", linkType: "DoFollow" },
    { id: 405, domain: "academicresources.org", price: 15, dr: 32, da: 28, traffic: "134.8K", linkType: "DoFollow" },
    { id: 406, domain: "skillupdaily.com", price: 25, dr: 48, da: 44, traffic: "356.2K", linkType: "NoFollow" },
  ],
  General: [
    { id: 501, domain: "lifestylemag.net", price: 15, dr: 40, da: 36, traffic: "456.3K", linkType: "DoFollow" },
    { id: 502, domain: "dailybuzz.org", price: 12, dr: 35, da: 31, traffic: "312.8K", linkType: "DoFollow" },
    { id: 503, domain: "trendingwire.com", price: 18, dr: 42, da: 38, traffic: "534.1K", linkType: "NoFollow" },
    { id: 504, domain: "interestings.com", price: 10, dr: 30, da: 26, traffic: "245.6K", linkType: "DoFollow" },
    { id: 505, domain: "wideangleblog.net", price: 14, dr: 38, da: 34, traffic: "389.2K", linkType: "DoFollow" },
    { id: 506, domain: "everythingdaily.com", price: 16, dr: 40, da: 36, traffic: "423.7K", linkType: "NoFollow" },
  ],
  "Home Improvement": [
    { id: 601, domain: "renovatepro.com", price: 28, dr: 42, da: 38, traffic: "178.5K", linkType: "DoFollow" },
    { id: 602, domain: "interiordesignhub.net", price: 32, dr: 48, da: 44, traffic: "234.1K", linkType: "DoFollow" },
    { id: 603, domain: "diyhomeprojects.org", price: 22, dr: 36, da: 32, traffic: "145.8K", linkType: "NoFollow" },
    { id: 604, domain: "landscapingideas.com", price: 25, dr: 40, da: 36, traffic: "198.3K", linkType: "DoFollow" },
    { id: 605, domain: "homemaintenancetips.net", price: 20, dr: 34, da: 30, traffic: "123.6K", linkType: "DoFollow" },
    { id: 606, domain: "smartlivingtoday.com", price: 30, dr: 46, da: 42, traffic: "267.9K", linkType: "NoFollow" },
  ],
  "Digital Marketing": [
    { id: 701, domain: "seoexpertsblog.com", price: 35, dr: 55, da: 50, traffic: "345.2K", linkType: "DoFollow" },
    { id: 702, domain: "socialmediamarketer.net", price: 30, dr: 48, da: 44, traffic: "298.7K", linkType: "DoFollow" },
    { id: 703, domain: "ppcstrategies.org", price: 40, dr: 58, da: 54, traffic: "412.5K", linkType: "NoFollow" },
    { id: 704, domain: "contentmarketinghub.com", price: 28, dr: 45, da: 41, traffic: "267.3K", linkType: "DoFollow" },
    { id: 705, domain: "emailmarketingpro.net", price: 32, dr: 50, da: 46, traffic: "312.8K", linkType: "DoFollow" },
    { id: 706, domain: "digitaltrendstoday.com", price: 38, dr: 56, da: 52, traffic: "378.1K", linkType: "NoFollow" },
  ],
  Technology: [
    { id: 801, domain: "techreviewdaily.com", price: 45, dr: 62, da: 58, traffic: "567.3K", linkType: "DoFollow" },
    { id: 802, domain: "aiinnovationblog.net", price: 55, dr: 70, da: 66, traffic: "723.8K", linkType: "NoFollow" },
    { id: 803, domain: "cybersecinsights.org", price: 50, dr: 65, da: 60, traffic: "634.2K", linkType: "DoFollow" },
    { id: 804, domain: "cloudcomputinghub.com", price: 48, dr: 60, da: 56, traffic: "498.5K", linkType: "DoFollow" },
    { id: 805, domain: "gadgetnews.net", price: 35, dr: 52, da: 48, traffic: "412.1K", linkType: "NoFollow" },
    { id: 806, domain: "opensourceworld.org", price: 40, dr: 58, da: 54, traffic: "534.7K", linkType: "DoFollow" },
  ],
  Travel: [
    { id: 901, domain: "wanderlustguide.com", price: 22, dr: 42, da: 38, traffic: "298.5K", linkType: "DoFollow" },
    { id: 902, domain: "traveldealsblog.net", price: 18, dr: 36, da: 32, traffic: "234.1K", linkType: "DoFollow" },
    { id: 903, domain: "adventuretravel.org", price: 28, dr: 48, da: 44, traffic: "356.7K", linkType: "NoFollow" },
    { id: 904, domain: "hotelreviewshub.com", price: 20, dr: 38, da: 34, traffic: "267.3K", linkType: "DoFollow" },
    { id: 905, domain: "backpackerstips.net", price: 15, dr: 30, da: 26, traffic: "178.9K", linkType: "DoFollow" },
    { id: 906, domain: "luxurytravelmag.com", price: 32, dr: 52, da: 48, traffic: "412.6K", linkType: "NoFollow" },
  ],
  Health: [
    { id: 1001, domain: "wellnesswave.com", price: 28, dr: 48, da: 44, traffic: "389.2K", linkType: "DoFollow" },
    { id: 1002, domain: "fitnessfirst.net", price: 22, dr: 40, da: 36, traffic: "312.7K", linkType: "DoFollow" },
    { id: 1003, domain: "nutritioninsights.org", price: 32, dr: 52, da: 48, traffic: "456.3K", linkType: "NoFollow" },
    { id: 1004, domain: "mentalhealthdaily.com", price: 25, dr: 42, da: 38, traffic: "345.8K", linkType: "DoFollow" },
    { id: 1005, domain: "medicalnewswire.net", price: 35, dr: 58, da: 54, traffic: "534.1K", linkType: "DoFollow" },
    { id: 1006, domain: "yogalifestyle.org", price: 18, dr: 34, da: 30, traffic: "234.5K", linkType: "NoFollow" },
  ],
  Finance: [
    { id: 1101, domain: "investorsdaily.com", price: 45, dr: 62, da: 58, traffic: "567.8K", linkType: "DoFollow" },
    { id: 1102, domain: "personalfinancepro.net", price: 35, dr: 52, da: 48, traffic: "423.5K", linkType: "DoFollow" },
    { id: 1103, domain: "cryptotrends.org", price: 50, dr: 68, da: 64, traffic: "678.2K", linkType: "NoFollow" },
    { id: 1104, domain: "bankinginsights.com", price: 38, dr: 55, da: 50, traffic: "489.1K", linkType: "DoFollow" },
    { id: 1105, domain: "financialmarketsdaily.net", price: 42, dr: 60, da: 56, traffic: "534.6K", linkType: "DoFollow" },
    { id: 1106, domain: "moneymattersblog.org", price: 30, dr: 48, da: 44, traffic: "356.3K", linkType: "NoFollow" },
  ],
  "Real Estate": [
    { id: 1201, domain: "propertyinsights.com", price: 35, dr: 50, da: 46, traffic: "278.5K", linkType: "DoFollow" },
    { id: 1202, domain: "realestateinvestor.net", price: 40, dr: 55, da: 50, traffic: "345.2K", linkType: "DoFollow" },
    { id: 1203, domain: "mortgageratesblog.org", price: 28, dr: 42, da: 38, traffic: "234.7K", linkType: "NoFollow" },
    { id: 1204, domain: "homemarkettrends.com", price: 32, dr: 48, da: 44, traffic: "312.1K", linkType: "DoFollow" },
    { id: 1205, domain: "rentalpropertypro.net", price: 25, dr: 38, da: 34, traffic: "198.6K", linkType: "DoFollow" },
    { id: 1206, domain: "luxuryhomesmag.com", price: 45, dr: 60, da: 56, traffic: "412.3K", linkType: "NoFollow" },
  ],
  Sports: [
    { id: 1301, domain: "sportsdailyhub.com", price: 25, dr: 45, da: 41, traffic: "456.3K", linkType: "DoFollow" },
    { id: 1302, domain: "footballinsider.net", price: 30, dr: 50, da: 46, traffic: "534.8K", linkType: "DoFollow" },
    { id: 1303, domain: "basketballcentral.org", price: 22, dr: 40, da: 36, traffic: "378.2K", linkType: "NoFollow" },
    { id: 1304, domain: "mmacombatnews.com", price: 28, dr: 46, da: 42, traffic: "412.5K", linkType: "DoFollow" },
    { id: 1305, domain: "tennisworldblog.net", price: 20, dr: 36, da: 32, traffic: "267.1K", linkType: "DoFollow" },
    { id: 1306, domain: "athleteprofiledaily.com", price: 24, dr: 42, da: 38, traffic: "345.6K", linkType: "NoFollow" },
  ],
  Fashion: [
    { id: 1401, domain: "styleguideblog.com", price: 28, dr: 42, da: 38, traffic: "312.5K", linkType: "DoFollow" },
    { id: 1402, domain: "fashiontrendsworld.net", price: 32, dr: 48, da: 44, traffic: "398.2K", linkType: "DoFollow" },
    { id: 1403, domain: "designerbrandinsider.org", price: 38, dr: 52, da: 48, traffic: "456.7K", linkType: "NoFollow" },
    { id: 1404, domain: "beautytipsdaily.com", price: 22, dr: 36, da: 32, traffic: "267.3K", linkType: "DoFollow" },
    { id: 1405, domain: "luxuryfashionmag.net", price: 42, dr: 58, da: 54, traffic: "534.1K", linkType: "DoFollow" },
    { id: 1406, domain: "streetstylecentral.com", price: 25, dr: 40, da: 36, traffic: "345.8K", linkType: "NoFollow" },
  ],
  Food: [
    { id: 1501, domain: "tastyrecipesblog.com", price: 18, dr: 38, da: 34, traffic: "423.5K", linkType: "DoFollow" },
    { id: 1502, domain: "restaurantreviewer.net", price: 22, dr: 42, da: 38, traffic: "345.2K", linkType: "DoFollow" },
    { id: 1503, domain: "cookingtipsdaily.org", price: 15, dr: 32, da: 28, traffic: "267.8K", linkType: "NoFollow" },
    { id: 1504, domain: "foodsciencehub.com", price: 28, dr: 48, da: 44, traffic: "489.1K", linkType: "DoFollow" },
    { id: 1505, domain: "nutritionandfood.net", price: 20, dr: 36, da: 32, traffic: "312.6K", linkType: "DoFollow" },
    { id: 1506, domain: "gourmetworldmag.com", price: 32, dr: 52, da: 48, traffic: "534.3K", linkType: "NoFollow" },
  ],
  Gaming: [
    { id: 1601, domain: "gamingrevolution.com", price: 30, dr: 48, da: 44, traffic: "567.3K", linkType: "DoFollow" },
    { id: 1602, domain: "esportswiredaily.net", price: 35, dr: 52, da: 48, traffic: "645.8K", linkType: "DoFollow" },
    { id: 1603, domain: "gamereviewcentral.org", price: 22, dr: 38, da: 34, traffic: "412.5K", linkType: "NoFollow" },
    { id: 1604, domain: "gaminghardwarehub.com", price: 28, dr: 44, da: 40, traffic: "498.2K", linkType: "DoFollow" },
    { id: 1605, domain: "indiegamespotlight.net", price: 18, dr: 34, da: 30, traffic: "334.7K", linkType: "DoFollow" },
    { id: 1606, domain: "mmorpginsider.com", price: 25, dr: 42, da: 38, traffic: "456.1K", linkType: "NoFollow" },
  ],
};

export default function CategoryPage({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);

  if (!cat) {
    return (
      <section className="page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Category not found</h1>
          <p>The category you are looking for does not exist.</p>
          <Link href="/all-categories" style={{ color: "var(--accent)" }}>← Back to All Categories</Link>
        </div>
      </section>
    );
  }

  const websites = mockWebsites[cat.name] || [];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div style={{ fontSize: "3rem", marginBottom: 8 }}>{cat.icon}</div>
          <h1>{cat.name}</h1>
          <p>{cat.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: 40, textAlign: "center" }}>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>{cat.count.toLocaleString()}+</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>Websites</div>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>45</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>Avg. DR</div>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>$35</div>
              <div style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>Avg. Price</div>
            </div>
          </div>

          <h2 style={{ marginBottom: 24 }}>Websites in {cat.name}</h2>

          <div className="website-grid">
            {websites.map((w) => (
              <div key={w.id} className="website-card">
                <div className="website-top" title={w.domain}>
                  <span className="website-domain">{w.domain.slice(0, 3)}...</span>
                  <span className="website-price">Buy {w.price} USD</span>
                </div>
                <div className="website-meta">Link Type: {w.linkType}</div>
                <div className="metrics">
                  <span>📊 {w.traffic}</span>
                  <span>🔗 {w.dr}</span>
                  <span>🏆 {w.da}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/marketplace" className="btn">
              Browse All {cat.count.toLocaleString()} Websites →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
