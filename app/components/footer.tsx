"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#02120b] to-[#000000] pt-20 pb-10 px-6 overflow-hidden">

      {/* Background Big Text */}
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] font-bold text-[#22c55e]/5 select-none pointer-events-none">
        RAJNESH AGARWAL
      </h1>

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16">

          {/* LEFT */}
          <div className="text-[#bbf7d0] space-y-4">
            <div className="flex gap-4">
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#22c55e] transition" />
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-[#22c55e] transition" />
            </div>

            <p className="text-sm font-medium">
              cafepreneurs@gmail.com
            </p>

            <p className="text-xs text-[#bbf7d0]/60 leading-relaxed">
              Helping you launch and scale your cafe & cloud kitchen business.
            </p>
          </div>

          {/* CENTER CTA */}
          <div className="flex justify-center">
            <a
              href="#reserve"
              className="relative bg-[#22c55e] text-black px-6 py-3 rounded-lg text-sm font-semibold shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:scale-105 transition"
            >
              Reserve Your Spot
              <span className="ml-2 text-[10px] bg-black/20 px-2 py-[2px] rounded">
                FREE
              </span>
            </a>
          </div>

          {/* RIGHT LINKS */}
          <div className="text-right space-y-2 text-sm text-[#bbf7d0]">
            <a href="#hero" className="block hover:text-[#22c55e] transition">Home</a>
            <a href="#features" className="block hover:text-[#22c55e] transition">What You Get</a>
            <a href="#testimonials" className="block hover:text-[#22c55e] transition">Testimonials</a>
            <a href="#faq" className="block hover:text-[#22c55e] transition">FAQ</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#22c55e]/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#bbf7d0]/60">

          <p>© {new Date().getFullYear()} Cafepreneurs. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#22c55e] transition">Terms & Conditions</a>
            <a href="#" className="hover:text-[#22c55e] transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}