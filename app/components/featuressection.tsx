"use client";

import { Zap, Shield, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Fast Growth",
      desc: "Scale your business with proven strategies and automation."
    },
    {
      icon: Shield,
      title: "Secure Systems",
      desc: "Reliable and secure infrastructure for your digital growth."
    },
    {
      icon: TrendingUp,
      title: "Smart Marketing",
      desc: "Data-driven marketing that converts into real results."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#000000] to-[#02120b]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#bbf7d0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#bbf7d0]">
            Built for <span className="italic text-[#22c55e]">Growth</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#22c55e] mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl border border-[#22c55e]/10 rounded-2xl p-6 transition-all duration-500 hover:scale-[1.04] hover:border-[#22c55e]/40 hover:shadow-[0_20px_60px_rgba(34,197,94,0.2)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#22c55e]/10 to-transparent" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#22c55e]/10 group-hover:bg-[#22c55e]/20 transition">
                    <Icon className="w-6 h-6 text-[#22c55e]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#bbf7d0] mb-2">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-[#bbf7d0]/60 leading-relaxed">
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