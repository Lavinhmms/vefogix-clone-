"use client";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved) setLang(saved);
  }, []);

  function toggle() {
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    localStorage.setItem("language", next);
    window.dispatchEvent(new CustomEvent("language-changed", { detail: next }));
  }

  return (
    <button className="language-toggle" onClick={toggle} title="Toggle language">
      {lang === "en" ? "🇺🇸 English" : "🇪🇸 Español"}
    </button>
  );
}
