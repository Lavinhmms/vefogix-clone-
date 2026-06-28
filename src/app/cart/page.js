"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCart, removeFromCart, clearCart, cartTotal } from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const refreshCart = () => setCart(getCart());

  useEffect(() => {
    refreshCart();
    window.addEventListener("cart-updated", refreshCart);
    return () => window.removeEventListener("cart-updated", refreshCart);
  }, []);

  const total = cartTotal(cart);

  if (cart.length === 0) {
    return (
      <>
        <section className="page-hero">
          <h1>Shopping Cart</h1>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <p>Your cart is empty</p>
            <Link href="/marketplace" className="btn btn-primary">
              Browse Marketplace
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero">
        <h1>Shopping Cart</h1>
      </section>
      <section className="section">
        <div className="container">
          {cart.map((item) => (
            <div key={item.id} className="card" style={{ padding: "1rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{item.domain}</strong>
                <div>Price: ${item.price}</div>
                <div>Quantity: 1</div>
                <div>Total: ${item.price}</div>
              </div>
              <button className="btn btn-outline" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <div style={{ textAlign: "right", fontSize: "1.2rem", fontWeight: "bold", margin: "1rem 0" }}>
            Cart Total: ${total}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-outline" onClick={clearCart}>
              Clear Cart
            </button>
            <Link href="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
