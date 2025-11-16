"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const messages = [
    "Need quick help?",
    "Tap to chat on WhatsApp 🤝",
    "We reply instantly ⚡",
    "Ask us anything!"
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [typing, setTyping] = useState("");

  // Typewriter
  useEffect(() => {
    if (show) {
      let i = 0;
      const interval = setInterval(() => {
        setTyping(messages[index].slice(0, i));
        i++;
        if (i > messages[index].length) clearInterval(interval);
      }, 35);

      return () => clearInterval(interval);
    } else {
      setTyping("");
    }
  }, [show, index]);

  // Rotate bubble messages
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setIndex((prev) => (prev + 1) % messages.length);

      setTimeout(() => setShow(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Message Bubble */}
      <div
        className={`
          fixed right-6 bottom-[110px]  
          max-w-[220px] px-4 py-3 rounded-2xl shadow-2xl 
          bg-white border border-gray-200 text-gray-800 text-[15px]
          transition-all duration-500 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
        `}
      >
        <span className="leading-snug">{typing}</span>

        <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-200"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link href="https://wa.me/8801861478232" target="_blank">
        <div
          className="fixed bottom-6 right-6 w-20 h-20 rounded-full 
          bg-[#25D366] text-white flex items-center justify-center shadow-xl 
          cursor-pointer transition-all duration-300 hover:scale-110 
          hover:shadow-[0_0_30px_#25D366aa] animate-[float_3s_ease-in-out_infinite]"
        >
          <FaWhatsapp className="animate-pulse" size={46} />
        </div>
      </Link>
    </>
  );
}
