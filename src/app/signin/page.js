"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? "Signed up" : "Signed in"} as ${email}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
        <p>{isSignUp ? "Join 70K+ publishers and buyers" : "Welcome back to VefoGix"}</p>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-primary">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="divider">or continue with</div>

        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>Google</button>
          <button className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>GitHub</button>
        </div>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: ".9rem" }}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <p style={{ textAlign: "center", marginTop: 12, fontSize: ".8rem", color: "var(--text-muted)" }}>
          By continuing, you agree to our{" "}
          <Link href="/terms-and-conditions" style={{ color: "var(--primary)" }}>Terms</Link>{" "}
          and{" "}
          <Link href="/privacy-policy" style={{ color: "var(--primary)" }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
