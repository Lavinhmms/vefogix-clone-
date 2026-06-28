const CART_KEY = "vefogix_cart";

export function getCart() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch { return []; }
}

export function addToCart(item) {
  const cart = getCart();
  if (!cart.find((i) => i.id === item.id)) {
    cart.push({ ...item, quantity: 1 });
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
}

export function removeFromCart(id) {
  const cart = getCart().filter((i) => i.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cart-updated"));
}

export function cartTotal(cart) {
  return cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0);
}

export function cartCount() {
  return getCart().length;
}
