"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCart, cartTotal } from "@/lib/cart";

const STORAGE_KEY = "vefogix_dashboard";

const mockOrders = [
  { id: "ORD-001", domain: "techblog.com", price: 149, status: "Published", date: "2026-06-15" },
  { id: "ORD-002", domain: "fitnesshub.org", price: 99, status: "In Progress", date: "2026-06-20" },
  { id: "ORD-003", domain: "cookiemaster.com", price: 199, status: "Pending", date: "2026-06-22" },
  { id: "ORD-004", domain: "travelwild.net", price: 129, status: "Published", date: "2026-06-10" },
  { id: "ORD-005", domain: "devinsights.io", price: 179, status: "Published", date: "2026-06-08" },
  { id: "ORD-006", domain: "greenthumb.garden", price: 89, status: "In Progress", date: "2026-06-25" },
  { id: "ORD-007", domain: "pixelperfect.design", price: 219, status: "Pending", date: "2026-06-28" },
  { id: "ORD-008", domain: "moneysmart.finance", price: 159, status: "Published", date: "2026-06-05" },
];

const mockListings = [
  { id: "LST-001", domain: "myblog.com", price: 149, status: "Approved", views: 342 },
  { id: "LST-002", domain: "techtalk.io", price: 99, status: "Pending", views: 0 },
  { id: "LST-003", domain: "healthylife.org", price: 199, status: "Rejected", views: 128 },
];

const mockTransactions = [
  { id: "TXN-001", date: "2026-06-01", description: "Payment from ORD-001", amount: 149, status: "Completed" },
  { id: "TXN-002", date: "2026-06-03", description: "Payment from ORD-004", amount: 129, status: "Completed" },
  { id: "TXN-003", date: "2026-06-05", description: "Payment from ORD-005", amount: 179, status: "Completed" },
  { id: "TXN-004", date: "2026-06-08", description: "Payment from ORD-008", amount: 159, status: "Completed" },
  { id: "TXN-005", date: "2026-06-10", description: "Withdrawal", amount: -300, status: "Completed" },
];

const initialData = {
  totalOrders: 12,
  activeListings: 3,
  totalSpent: 1247,
  walletBalance: 0,
  orders: mockOrders,
  listings: mockListings,
  transactions: mockTransactions,
};

function loadData() {
  if (typeof window === "undefined") return initialData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialData;
  } catch {
    return initialData;
  }
}

function statusStyle(status) {
  switch (status) {
    case "Published":
    case "Approved":
    case "Completed":
      return { background: "rgba(22,163,74,.1)", color: "#16a34a" };
    case "In Progress":
    case "Pending":
      return { background: "rgba(234,179,8,.1)", color: "#ca8a04" };
    case "Rejected":
      return { background: "rgba(220,38,38,.1)", color: "#dc2626" };
    default:
      return {};
  }
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(loadData());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "orders", label: "My Orders" },
    { key: "listings", label: "My Listings" },
    { key: "wallet", label: "Wallet" },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Dashboard</h1>
          <p>Manage your orders, listings, and account</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", gap: 4, borderBottom: "2px solid var(--border)", marginBottom: 32 }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "12px 24px",
                  border: "none",
                  background: "none",
                  fontSize: ".95rem",
                  fontWeight: 600,
                  color: activeTab === tab.key ? "var(--primary)" : "var(--text-muted)",
                  borderBottom: activeTab === tab.key ? "2px solid var(--primary)" : "2px solid transparent",
                  marginBottom: -2,
                  cursor: "pointer",
                  transition: "color .2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <>
              <div className="grid grid-4" style={{ marginBottom: 40 }}>
                <div className="card" style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>{data.totalOrders}</div>
                  <div style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 4 }}>Total Orders</div>
                </div>
                <div className="card" style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>{data.activeListings}</div>
                  <div style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 4 }}>Active Listings</div>
                </div>
                <div className="card" style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>${data.totalSpent.toLocaleString()}</div>
                  <div style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 4 }}>Total Spent</div>
                </div>
                <div className="card" style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>${data.walletBalance.toLocaleString()}</div>
                  <div style={{ fontSize: ".9rem", color: "var(--text-muted)", marginTop: 4 }}>Wallet Balance</div>
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>Recent Orders</h3>
                {data.orders.slice(0, 3).map((order) => (
                  <div
                    key={order.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: ".9rem" }}>{order.domain}</div>
                      <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>{order.id}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontWeight: 700, color: "var(--primary)" }}>${order.price}</span>
                      <span className="tag" style={statusStyle(order.status)}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9rem" }}>
                  <thead>
                    <tr style={{ background: "var(--bg-alt)", textAlign: "left" }}>
                      <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Order ID</th>
                      <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Website</th>
                      <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Price</th>
                      <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Status</th>
                      <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.orders.map((order) => (
                      <tr key={order.id} style={{ borderTop: "1px solid var(--border)" }}>
                        <td style={{ padding: "14px 20px", fontWeight: 500 }}>{order.id}</td>
                        <td style={{ padding: "14px 20px" }}>{order.domain}</td>
                        <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--primary)" }}>${order.price}</td>
                        <td style={{ padding: "14px 20px" }}>
                          <span className="tag" style={statusStyle(order.status)}>{order.status}</span>
                        </td>
                        <td style={{ padding: "14px 20px", color: "var(--text-muted)" }}>{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "listings" && (
            <>
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
                <Link href="/publishers/submit" className="btn btn-primary">+ Add New Listing</Link>
              </div>
              <div className="grid grid-3">
                {data.listings.map((listing) => (
                  <div key={listing.id} className="card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>{listing.domain}</h3>
                      <span className="tag" style={statusStyle(listing.status)}>{listing.status}</span>
                    </div>
                    <div style={{ display: "flex", gap: 24, fontSize: ".9rem", color: "var(--text-muted)" }}>
                      <div><span style={{ fontWeight: 600, color: "var(--text)" }}>${listing.price}</span> / post</div>
                      <div><span style={{ fontWeight: 600, color: "var(--text)" }}>{listing.views}</span> views</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "wallet" && (
            <>
              <div className="card" style={{ textAlign: "center", padding: 48, marginBottom: 32 }}>
                <div style={{ fontSize: ".9rem", color: "var(--text-muted)", marginBottom: 8 }}>Current Balance</div>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--primary)", marginBottom: 20 }}>
                  ${data.walletBalance.toFixed(2)}
                </div>
                <button className="btn btn-primary" onClick={() => alert("Coming soon")}>Add Funds</button>
              </div>

              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Transaction History</h3>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9rem" }}>
                    <thead>
                      <tr style={{ background: "var(--bg-alt)", textAlign: "left" }}>
                        <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Date</th>
                        <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Description</th>
                        <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Amount</th>
                        <th style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text-muted)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.transactions.map((txn) => (
                        <tr key={txn.id} style={{ borderTop: "1px solid var(--border)" }}>
                          <td style={{ padding: "14px 20px", color: "var(--text-muted)" }}>{txn.date}</td>
                          <td style={{ padding: "14px 20px" }}>{txn.description}</td>
                          <td style={{ padding: "14px 20px", fontWeight: 600, color: txn.amount >= 0 ? "#16a34a" : "#dc2626" }}>
                            {txn.amount >= 0 ? "+" : ""}${Math.abs(txn.amount)}
                          </td>
                          <td style={{ padding: "14px 20px" }}>
                            <span className="tag" style={statusStyle(txn.status)}>{txn.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
