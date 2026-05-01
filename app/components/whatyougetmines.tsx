"use client";

import {
  Users,
  Map,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    load: "📅", // ✅ emoji
    title: "Launch Timeline",
    desc: "By when do you plan to officially start your food business?",
  },
  {
    load: "📍",
    title: "The Deep Audit",
    desc: "What is your preferred location (City or specific area)?",
  },
  {
    load: "💰",
    title: "The Financial Filter",
    desc: "What is your estimated starting budget for this venture?",
  },
  {
    load: "⚡",
    title: "The Brand Blueprint",
    desc: "What are the top 3 hurdles where you need professional strategic clarity?",
  },
];

export default function WhatYouGetMines() {
  return (
    <section className="relative bg-[#0b0f0c] sm:py-24 py-12 px-6 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff6a00]/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff6a00]/40 text-xs tracking-[0.4em] uppercase mb-4">
            Pre-Call Assessment
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Is Your Café Strategy{" "}
            <span className="italic text-[#ff6a00]">Ready?</span>
          </h2>

          <p className="text-white pt-4 max-w-[400px] mx-auto">
            Before our 1-on-1 session, take a moment to evaluate these 4 critical pillars of your future business.
          </p>

          <div className="w-20 h-[2px] bg-white/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = item.load;

            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-7 transition-all duration-500 hover:border-[#ff6a00]/40 hover:scale-[1.04] overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#ff6a00]/10 to-transparent rounded-2xl" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff6a00]/10 group-hover:bg-[#ff6a00]/20 transition text-xl">
                    
                    {/* ✅ Condition */}
                   
                      <span>{Icon}</span>
                   

                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#ff6a00]/90 mb-2 group-hover:text-[#ff6a00] transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-white leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}