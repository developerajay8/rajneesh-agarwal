"use client";

import {
  Video,
  Users,
  Map,
  TrendingUp,
  BadgePercent,
  Gift,
} from "lucide-react";

const items = [
  {
    icon: Video,
    title: "Live 90-Min Workshop",
    desc: "Master the fundamentals of café success",
  },
  {
    icon: Users,
    title: "Business Roadmap",
    desc: "Clear execution plan to launch in 60 days.",
  },
  {
    icon: Map,
    title: "LIVE 1-on-1 Consultation",
    desc: "Personalized startup blueprint tailored to your goals",
  },
  {
    icon: TrendingUp,
    title: "3x Sales Blueprint",
    desc: "Proven strategies to triple your café's daily revenue",
  },
  {
    icon: BadgePercent,
    title: "Foodpreneur Community",
    desc: "Network with people on the same journey",
  },
  {
    icon: Gift,
    title: "Bonuses Worth ₹15,000",
    desc: "Exclusive toolkit, templates, and vendor lists",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative bg-[#0b0f0c] sm:py-24 py-12 px-6 overflow-hidden">
      
      {/* Orange Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff6a00]/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff6a00]/40 text-xs tracking-[0.4em] uppercase mb-4">
            Your Access Pass
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Everything You {" "}
            <span className="italic text-[#ff6a00]">Get</span>
          </h2>

          <div className="w-20 h-[2px] bg-[#fff]/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-7 transition-all duration-500 hover:border-[#ff6a00]/40 hover:scale-[1.04] overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#ff6a00]/10 to-transparent rounded-2xl" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff6a00]/10 group-hover:bg-[#ff6a00]/20 transition">
                    <Icon className="w-6 h-6 text-[#ff6a00]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#ff6a00]/90 mb-2 group-hover:text-[#ff6a00] transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-white leading-relaxed  transition">
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