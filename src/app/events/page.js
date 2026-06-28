import Link from "next/link";

const events = [
  { name: "SEO Summit 2026", date: "Aug 15, 2026", location: "Las Vegas, NV", desc: "Join industry leaders for the biggest SEO conference of the year. Learn about AI in SEO, link building strategies, and more.", type: "Conference" },
  { name: "Link Building Workshop", date: "Sep 5, 2026", location: "Online", desc: "Hands-on workshop covering white-hat link building techniques that drive results in 2026.", type: "Workshop" },
  { name: "Guest Posting Masterclass", date: "Oct 12, 2026", location: "Online", desc: "Master the art of guest posting with our comprehensive masterclass series.", type: "Webinar" },
  { name: "Content Marketing Forum", date: "Nov 8, 2026", location: "New York, NY", desc: "Network with content marketing professionals and share strategies for success.", type: "Conference" },
];

export default function Events() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Events</h1>
          <p>Join us at upcoming SEO conferences, workshops, and webinars</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {events.map((event) => (
              <div key={event.name} className="card" style={{ padding: 28 }}>
                <span className="tag" style={{ marginBottom: 12, display: "inline-block" }}>{event.type}</span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }}>{event.name}</h3>
                <p style={{ fontSize: ".85rem", color: "var(--text-muted)", marginBottom: 4 }}>📅 {event.date}</p>
                <p style={{ fontSize: ".85rem", color: "var(--text-muted)", marginBottom: 12 }}>📍 {event.location}</p>
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
