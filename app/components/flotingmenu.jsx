"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* Options */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Instagram */}
        <a href="#" className="border border-[#ff6a00] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition">
          <FaInstagram size={20} />
        </a>

        {/* Video */}
        <a href="#" className="border border-[#ff6a00] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition">
          <FaVideo size={20} />
        </a>

        {/* WhatsApp */}
        <a href="#" className="border border-[#ff6a00] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition">
          <FaWhatsapp size={20} />
        </a>

        {/* Call */}
        <a href="#" className="border border-[#ff6a00] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition">
          <FaPhoneAlt size={20} />
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#ff6a00] cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,106,0,0.6)] hover:scale-110 transition"
      >
        <FiCircle size={28} />
      </button>
    </div>
  );
}