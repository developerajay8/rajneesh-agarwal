"use client";

import { CalendarDays, Video, Target, Gift } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Flexible Schedule",
    desc: "Book your slot online",
  },
  {
    icon: Video,
    title: "1-on-1 Zoom Call",
    desc: "Private & Focused",
  },
  {
    icon: Target,
    title: "Personal Roadmap",
    desc: "Tailored to your goal",
  },
  {
    icon: Gift,
    title: "Premium Bonuses",
    desc: "Worth ₹25,000",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative bg-black py-6 px-4 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/10 via-transparent to-[#ff6a00]/10 blur-2xl opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 group"
            >
              {/* Icon Box */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ff6a00]/10 group-hover:bg-[#ff6a00]/20 transition">
                <Icon className="w-5 h-5 text-[#ff6a00]" />
              </div>

              {/* Text */}
              <div>
                <p className="text-white text-sm font-medium leading-tight">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}