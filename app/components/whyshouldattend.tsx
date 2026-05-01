"use client";

import {
  Coffee,
  Briefcase,
  Store,
  Pizza,
  Lightbulb,
  Rocket,
} from "lucide-react";

const audience = [
  {
    icon: Coffee,
    title: "Concept & Theme Selection",
    desc: "Decide on a unique cafe concept that stands out in your local market.",
  },
  {
    icon: Briefcase,
    title: "Choosing the Right Location",
    desc: "Learn the 3-step audit to verify if a location will actually be profitable.",
  },
  {
    icon: Store,
    title: "Creating a Profitable Menu",
    desc: "Plan a menu with high perceived value and low raw material costs.",
  },
  {
    icon: Pizza,
    title: "Budget Planning for Beginners",
    desc: "Detailed CAPEX and OPEX planning to manage your investment wisely.",
  },
  {
    icon: Lightbulb,
    title: "Staffing & Operations",
    desc: "How to find reliable suppliers and hire the right team for growth.",
  },
  {
    icon: Rocket,
    title: "Marketing & Branding",
    desc: "A step-by-step guide to generating buzz before your cafe even opens.",
  },
];

export default function WhyShouldAttend() {
  return (
    <section className="relative bg-[#0b0f0e] sm:py-24 py-12 px-6 text-white overflow-hidden">

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ff6a00]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff6a00]/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-4">
           Your Strategic Roadmap
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            What We'll  <span className="italic text-[#ff6a00]">Accomplish</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#ff6a00]/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#121817] border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#ff6a00]/10 to-transparent" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff6a00]/10 group-hover:bg-[#ff6a00] transition">
                    <Icon className="w-6 h-6 text-[#ff6a00] group-hover:text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {a.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        
      </div>
    </section>
  );
}