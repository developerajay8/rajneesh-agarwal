"use client";

import Image from "next/image";
// import { Instagram } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const stats = [
  { val: "45K+", label: "Followers" },
  { val: "5+ Yrs", label: "Experience" },
  { val: "239+", label: "Content Posted" },
  { val: "1 Yr+", label: "Consulting" },
];

export default function AboutCoach() {
  return (
    <section className="bg-gradient-to-b from-[#3b2f2a] to-[#1f1c1d] py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-[#c9a96e]/20 to-transparent blur-3xl rounded-full" />

            {/* Image */}
            <div className="relative w-82 md:w-110 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/rajneesh.jpg"
                alt="Rajneesh Agarwal"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-xl">
              {stats.slice(0, 2).map((s) => (
                <div key={s.val} className="text-center">
                  <p className="text-[#c9a96e] font-bold text-lg">{s.val}</p>
                  <p className="text-[#edd9c0]/60 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          {/* Tag */}
          <p className="text-[#edd9c0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            About Your Coach
          </p>

          {/* Name */}
          <h2 className="text-4xl md:text-5xl font-semibold text-[#edd9c0] mb-3">
            Rajneesh Agarwal
          </h2>

          {/* Role */}
          <p className="text-[#c9a96e] text-sm mb-6">
            Cafe Coach · Consultant · Cafe Owner — Jaipur
          </p>

          {/* Bio */}
          <p className="text-[#edd9c0]/80 leading-relaxed mb-5">
            I'm Rajneesh — a food business coach who has helped aspiring
            entrepreneurs turn their ideas into profitable cafes and cloud kitchens.
            Over the last 5+ years, I've built real businesses using strategies that
            actually work in the market.
          </p>

          <p className="text-[#edd9c0]/70 leading-relaxed mb-8">
            My mission is simple: help you start and scale your food business
            without wasting money, time, or making costly mistakes that most beginners make.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((s) => (
              <div
                key={s.val}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center hover:bg-[#c9a96e] transition-all duration-300"
              >
                <p className="text-[#c9a96e] group-hover:text-[#1f1c1d] font-bold text-xl transition">
                  {s.val}
                </p>
                <p className="text-[#edd9c0]/60 group-hover:text-[#1f1c1d]/70 text-xs transition">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://www.instagram.com/cafeconsultant_rajneesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#edd9c0] px-6 py-3 rounded-full hover:bg-[#c9a96e] hover:text-[#1f1c1d] transition-all duration-300"
          >
            <FaInstagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}