"use client";

import {
  Building2,
  AlertTriangle,
  TrendingUp,
  Utensils,
  MessageCircleQuestion,
} from "lucide-react";

const lessons = [
  {
    icon: Building2,
    title: "5 Core Business Pillars",
    desc: "Step-by-step system to launch a profitable cafe or cloud kitchen in just 30–40 days.",
  },
  {
    icon: AlertTriangle,
    title: "Top Costly Mistakes",
    desc: "Avoid the 3 biggest mistakes that destroy 90% of new food businesses.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Sales System",
    desc: "Generate daily orders without expensive chefs & save ₹30,000/month.",
  },
  {
    icon: Utensils,
    title: "Menu & Branding Secrets",
    desc: "Create a high-converting menu & brand that doubles your sales.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Live Q&A",
    desc: "Get your doubts solved live and gain clarity on your next steps.",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="bg-[#0e1312] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-4">
            Workshop Curriculum
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            What You'll <span className="text-green-500 italic">Master</span>
          </h2>
          <div className="w-16 h-[2px] bg-green-500 mx-auto mt-6 opacity-40" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((l, i) => {
            const Icon = l.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#121817] border border-gray-800 rounded-2xl p-7 transition-all duration-500 hover:border-green-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-green-500/5" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500 transition">
                    <Icon className="w-6 h-6 text-green-400 group-hover:text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-green-400">
                  {l.title}
                </h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {l.desc}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#121817] border border-green-500/20 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-green-400 text-xl font-semibold mb-3">
                Ready to Start Your Cafe?
              </h3>
              <p className="text-gray-400 text-sm">
                Join now & learn how to build a profitable food business step-by-step.
              </p>
            </div>

            <a
              href="#reserve"
              className="mt-6 inline-block bg-green-500 text-black text-sm font-semibold px-6 py-3 rounded-xl text-center hover:bg-green-400 transition hover:scale-105"
            >
              Reserve My Spot →
            </a>

            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}