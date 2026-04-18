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
    desc: "High-converting menu templates to increase order value & sales.",
    worth: "₹12,000",
    price: "FREE",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Staff Agreement Format",
    desc: "Ready-to-use legal agreement to hire staff professionally.",
    worth: "₹7,999",
    price: "FREE",
    icon: FileText,
  },
  {
    num: "03",
    title: "Productivity Secrets",
    desc: "Systems to manage your cafe efficiently & boost profits.",
    worth: "₹10,000",
    price: "FREE",
    icon: Zap,
  },
];

export default function Bonuses() {
  return (
    <section className="bg-[#0b0f0e] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-4">
            Exclusive Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Free <span className="text-green-500 italic">Bonuses</span> Worth ₹25,000+
          </h2>
          <div className="w-16 h-[2px] bg-green-500 mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {bonuses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-green-500/30 to-transparent hover:from-green-500 transition duration-500"
              >
                {/* Inner */}
                <div className="relative h-full bg-[#121817] rounded-3xl p-7 border border-gray-800 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition">

                  {/* Big number */}
                  <span className="absolute top-5 right-6 text-6xl font-bold text-white/5">
                    {b.num}
                  </span>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500 transition">
                      <Icon className="w-7 h-7 text-green-400 group-hover:text-black" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full mb-3">
                    Bonus #{b.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">
                    {b.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-gray-400 mb-5">
                    {b.desc}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through text-sm">
                      {b.worth}
                    </span>

                    <span className="text-green-500 text-lg font-bold">
                      {b.price}
                    </span>

                    <span className="text-[10px] bg-green-500 text-black px-2 py-[2px] rounded-full font-semibold">
                      INCLUDED
                    </span>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/5 rounded-3xl pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm mt-12">
          All bonuses are included FREE when you register today.
        </p>
      </div>
    </section>
  );
}