"use client";
import { useState, useEffect, useRef } from "react";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("chat_messages");
    if (saved) {
      try { setMessages(JSON.parse(saved)); } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim(), id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply = {
        role: "bot",
        text: "Thanks for your message! One of our support agents will get back to you shortly.",
        id: Date.now() + 1,
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      <button className="chat-bubble" onClick={() => setOpen(!open)}>
        {open ? "✕" : "💬"}
      </button>
      {open && (
        <div className="chat-window">
          <div className="chat-header">VefoGix Support</div>
          <div className="chat-body">
            {messages.length === 0 && (
              <>
                <div className="chat-msg bot">Hi! How can I help you today?</div>
                <div className="chat-msg bot">Feel free to ask about our services.</div>
              </>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg ${m.role}`}>{m.text}</div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
