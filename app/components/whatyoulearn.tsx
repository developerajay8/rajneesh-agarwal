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
    desc: "Step-by-step system to launch a profitable cafe or cloud kitchen in just 30–40 days without confusion.",
  },
  {
    icon: AlertTriangle,
    title: "Top Costly Mistakes",
    desc: "Avoid the 3 biggest mistakes that destroy 90% of new food businesses before they even grow.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Sales System",
    desc: "Learn how to generate daily orders without hiring expensive chefs & save up to ₹30,000/month.",
  },
  {
    icon: Utensils,
    title: "Menu & Branding Secrets",
    desc: "Create a high-converting menu and brand identity that can double your sales in 30 days.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Live Q&A with Rajneesh",
    desc: "Get your personal business doubts solved live and gain clarity on your next steps.",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="bg-gradient-to-b from-[#f3e4cf] to-[#edd9c0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#6b5b52] text-xs tracking-[0.3em] uppercase mb-4">
            Workshop Curriculum
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f1c1d]">
            What You'll <span className="italic">Master</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#1f1c1d] mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((l, i) => {
            const Icon = l.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/40 backdrop-blur-lg border border-white/30 rounded-2xl p-7 transition-all duration-500 hover:bg-[#1f1c1d] hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f1c1d]/5 group-hover:bg-[#edd9c0] transition">
                    <Icon className="w-6 h-6 text-[#1f1c1d] group-hover:text-[#1f1c1d]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#1f1c1d] group-hover:text-[#edd9c0] mb-3 transition-colors">
                  {l.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#5c514a] group-hover:text-[#edd9c0]/80 transition-colors">
                  {l.desc}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1f1c1d] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-[#edd9c0] text-xl font-semibold mb-3">
                Ready to Build Your Dream Cafe?
              </h3>
              <p className="text-[#edd9c0]/70 text-sm">
                Join this free workshop and start your journey toward a
                profitable food business today.
              </p>
            </div>

            <a
              href="#reserve"
              className="mt-6 inline-block bg-[#edd9c0] text-[#1f1c1d] text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Reserve My Free Spot →
            </a>

            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}