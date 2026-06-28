"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCart, cartTotal, clearCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cartTotal(cart);

  const placeOrder = () => {
    const id = `${Math.random().toString(36).substring(2, 5).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
    setOrderId(id);
    clearCart();
  };

  if (cart.length === 0 && !orderId) {
    return (
      <>
        <section className="page-hero">
          <h1>Checkout</h1>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <p>Your cart is empty</p>
            <Link href="/cart" className="btn btn-primary">
              Go to Cart
            </Link>
          </div>
        </section>
      </>
    );
  }

  if (orderId) {
    return (
      <>
        <section className="page-hero">
          <h1>Checkout</h1>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="card" style={{ padding: "2rem", maxWidth: 500, margin: "0 auto" }}>
              <h2>Order placed!</h2>
              <p>Order ID: {orderId}</p>
              <Link href="/marketplace" className="btn btn-primary">
                Back to Marketplace
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero">
        <h1>Checkout</h1>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Order Summary</h2>
              {cart.map((item) => (
                <div key={item.id} className="card" style={{ padding: "1rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
                  <span>{item.domain}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <div style={{ textAlign: "right", fontWeight: "bold", fontSize: "1.1rem", marginTop: "1rem" }}>
                Total: ${total}
              </div>
            </div>
            <div>
              <h2>Payment Details</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ marginRight: "1rem" }}>
                  <input type="radio" name="payment" checked={paymentMethod === "Credit Card"} onChange={() => setPaymentMethod("Credit Card")} /> Credit Card
                </label>
                <label style={{ marginRight: "1rem" }}>
                  <input type="radio" name="payment" checked={paymentMethod === "PayPal"} onChange={() => setPaymentMethod("PayPal")} /> PayPal
                </label>
                <label>
                  <input type="radio" name="payment" checked={paymentMethod === "Crypto"} onChange={() => setPaymentMethod("Crypto")} /> Crypto
                </label>
              </div>
              {paymentMethod === "Credit Card" && (
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input type="text" placeholder="Expiry (MM/YY)" value={expiry} onChange={(e) => setExpiry(e.target.value)} style={{ flex: 1, padding: "0.5rem" }} />
                    <input type="text" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} style={{ flex: 1, padding: "0.5rem" }} />
                  </div>
                </div>
              )}
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "0.5rem" }} />
                </div>
              </div>
              <button className="btn btn-primary" onClick={placeOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
