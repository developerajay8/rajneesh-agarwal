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
    <section className="bg-gradient-to-b from-[#f3e4cf] to-[#edd9c0] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#6b5b52] text-xs tracking-[0.3em] uppercase mb-4">
            Everything Included
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f1c1d]">
            What You'll <span className="italic">Get Access To</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#1f1c1d] mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-6 transition-all duration-500 hover:bg-[#1f1c1d] hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 to-transparent" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f1c1d]/5 group-hover:bg-[#edd9c0] transition">
                    <Icon className="w-6 h-6 text-[#1f1c1d]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1f1c1d] group-hover:text-[#edd9c0] mb-2 transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-[#5c514a] leading-relaxed group-hover:text-[#edd9c0]/80 transition">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-[#4e3e36] text-sm">
            Everything you need to start & scale your food business — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}