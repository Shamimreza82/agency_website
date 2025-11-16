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

  // Typewriter effect
  useEffect(() => {
    if (show) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setTyping(messages[index].slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > messages[index].length) clearInterval(interval);
      }, 35);

      return () => clearInterval(interval);
    } else {
      setTyping("");
    }
  }, [show, index]);

  // Show new message every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setIndex((prev) => (prev + 1) % messages.length);

      // hide bubble
      setTimeout(() => setShow(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Modern Floating Msg Bubble */}
      <div
        className={`
          fixed bottom-32 right-6 max-w-[220px] px-4 py-3 rounded-2xl shadow-2xl 
          bg-white border border-gray-200 text-gray-800 text-[15px] font-medium
          transition-all duration-500 ease-out
          ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95 pointer-events-none"}
        `}
      >
        <span className="whitespace-normal leading-snug">{typing}</span>

        {/* small arrow */}
        <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-200"></div>
      </div>

      {/* Advanced WhatsApp Button */}
      <Link
        href="https://wa.me/8801861478232"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="
          fixed bottom-6 right-6 w-20 h-20 rounded-full flex items-center justify-center 
          bg-[#25D366] text-white shadow-xl cursor-pointer 
          transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_#25D366aa]
          animate-[float_3s_ease-in-out_infinite]
        ">
          <FaWhatsapp className="animate-pulse" size={46} />
        </div>
      </Link>

    </>
  );
}
