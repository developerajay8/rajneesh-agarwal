"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "What You Get", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop - 100;
          if (window.scrollY >= top) {
            setActive(link.href);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const [time, setTime] = useState(120); // 1 hour = 3600 sec

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 120);
    const mins = Math.floor((seconds % 120) / 60);
    const secs = seconds % 60;

    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
    
    <header className=" w-full z-50 backdrop-blur-xl bg-black/80 border-b border-[#edd9c0]/30">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo
        <img src="/logo.png" className="w-[120px]" alt="logo" /> */}
        <h1 className="sm:text-xl text-sm italic font-bold tracking-wide">
  <span className="text-white">RAJNEESH</span>{" "}
  <span className="text-[#ff6a00]">AGARWAL</span>
</h1>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`text-sm transition ${
                active === link.href
                  ? "text-[#1f1c1d] font-semibold"
                  : "text-[#000]/60 hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav> */}

        {/* CTA */}
        <a
          href="#reserve"
          className=" bg-[#ff6a00] text-[#edd9c0] sm:px-10 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
        >
          Book Now
        </a>

        {/* Mobile Toggle */}
        {/* <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {open && (
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
      )} */}
    </header>
    </div>
  );
}