"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "What You Get", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#1f1c1d]/70 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-[#edd9c0] font-semibold text-lg tracking-wide">
          Cafepreneurs
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-[#edd9c0]/70 hover:text-[#edd9c0] text-sm transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#reserve"
          className="hidden md:inline-block bg-[#edd9c0] text-[#1f1c1d] px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition"
        >
          Book Now
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#edd9c0]"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1f1c1d] px-6 pb-6 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[#edd9c0]/80"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reserve"
            className="block text-center bg-[#edd9c0] text-[#1f1c1d] py-3 rounded-full font-semibold"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}