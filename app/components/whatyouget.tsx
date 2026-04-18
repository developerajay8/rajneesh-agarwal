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
    desc: "Step-by-step training to launch your food business from scratch.",
  },
  {
    icon: Users,
    title: "Cafepreneurs Community",
    desc: "Get direct access to a network of like-minded food entrepreneurs.",
  },
  {
    icon: Map,
    title: "30–40 Day Roadmap",
    desc: "Clear action plan to start your cafe or cloud kitchen quickly.",
  },
  {
    icon: TrendingUp,
    title: "2X Sales Blueprint",
    desc: "Proven strategies to increase your daily orders and revenue.",
  },
  {
    icon: BadgePercent,
    title: "₹999 Consultation Offer",
    desc: "Exclusive discounted consulting only for workshop attendees.",
  },
  {
    icon: Gift,
    title: "Bonuses Worth ₹25,000+",
    desc: "Templates, systems & tools to fast-track your success.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative bg-[#0b0f0c] py-28 px-6 overflow-hidden">
      
      {/* Green Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-300/40 text-xs tracking-[0.4em] uppercase mb-4">
            Everything Included
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-green-100 leading-tight">
            What You'll{" "}
            <span className="italic text-green-400">Get Access To</span>
          </h2>

          <div className="w-20 h-[2px] bg-green-400/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-7 transition-all duration-500 hover:border-green-400/40 hover:scale-[1.04] overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 to-transparent rounded-2xl" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-400/10 group-hover:bg-green-400/20 transition">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-green-100 mb-2 group-hover:text-green-300 transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-green-200/60 leading-relaxed group-hover:text-green-200/80 transition">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center">
          <p className="text-green-300/30 text-sm tracking-wide">
            Everything you need to start & scale your food business — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}