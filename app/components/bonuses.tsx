"use client";

import {
  ClipboardList,
  FileText,
  Zap,
} from "lucide-react";

const bonuses = [
  {
    num: "01",
    title: "Menu Designing Template",
    desc: "High-converting menu templates used by top cafes to increase order value & sales.",
    worth: "₹12,000",
    price: "FREE",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Staff Agreement Format",
    desc: "Ready-to-use legal agreement to hire staff professionally and avoid future conflicts.",
    worth: "₹7,999",
    price: "FREE",
    icon: FileText,
  },
  {
    num: "03",
    title: "Productivity Secrets",
    desc: "Proven systems to manage your cafe efficiently & save time while boosting profits.",
    worth: "₹10,000",
    price: "FREE",
    icon: Zap,
  },
];

export default function Bonuses() {
  return (
    <section className="bg-[#1f1c1d] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#edd9c0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Exclusive Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#edd9c0]">
            Free <span className="italic text-[#c9a96e]">Bonuses</span> Worth ₹25,000+
          </h2>
          <div className="w-16 h-[2px] bg-[#edd9c0] mx-auto mt-6 opacity-20" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {bonuses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#c9a96e]/40 to-transparent hover:from-[#c9a96e] transition duration-500"
              >
                {/* Inner Card */}
                <div className="relative h-full bg-[#2a2526]/90 backdrop-blur-xl rounded-3xl p-7 border border-white/5 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition">

                  {/* Big number */}
                  <span className="absolute top-5 right-6 text-6xl font-bold text-white/5">
                    {b.num}
                  </span>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#edd9c0]/10 group-hover:bg-[#c9a96e] transition">
                      <Icon className="w-7 h-7 text-[#edd9c0] group-hover:text-[#1f1c1d]" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-[#edd9c0]/10 text-[#edd9c0]/70 text-xs px-3 py-1 rounded-full mb-3">
                    Bonus #{b.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#edd9c0] mb-3">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#edd9c0]/60 mb-5 leading-relaxed">
                    {b.desc}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#edd9c0]/30 line-through text-sm">
                      {b.worth}
                    </span>

                    <span className="text-[#c9a96e] text-lg font-bold">
                      {b.price}
                    </span>

                    <span className="text-[10px] bg-[#c9a96e] text-black px-2 py-[2px] rounded-full font-semibold">
                      INCLUDED
                    </span>
                  </div>

                  {/* Glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-[#edd9c0]/50 text-sm mt-12">
          All bonuses are included FREE when you register today.
        </p>
      </div>
    </section>
  );
}