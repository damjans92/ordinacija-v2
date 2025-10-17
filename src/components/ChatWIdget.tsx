"use client";

import React, { useEffect, useState } from "react";
import { findBestAnswer } from "../../lib/fuzzySearch";
import { usePathname } from "next/navigation";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ user?: string; bot?: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const pathname = usePathname();
  const [lang, setLang] = useState<"sr" | "en">("sr");

  useEffect(() => {
    if (pathname.startsWith("/en")) setLang("en");
    else setLang("sr");
  }, [pathname]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { user: userMsg }]);
    setInput("");

    // simulacija odgovora
    setTimeout(() => {
      const botMsg = findBestAnswer(userMsg, lang);
      setMessages((prev) => {
        const newChat = [...prev];
        newChat[newChat.length - 1].bot = botMsg;
        return newChat;
      });
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      )}

      {open && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <span>Chat</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className="space-y-1">
                {msg.user && (
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 p-2 rounded inline-block">
                      {msg.user}
                    </span>
                  </div>
                )}
                {msg.bot && (
                  <div className="text-left">
                    <span className="bg-gray-100 text-gray-800 p-2 rounded inline-block">
                      {msg.bot}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder={
                lang === "sr" ? "Postavite pitanje..." : "Ask a question..."
              }
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              {lang === "sr" ? "Pošalji" : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
