"use client";

import {
  ClipboardList,
  FileText,
  Zap,
} from "lucide-react";

const bonuses = [
  {
    num: "01",
    title: "Café Profit & Loss Simulator",
    desc: "A powerful Excel/Google Sheet tool that lets you plug in your numbers (rent, staff, ingredients) and see your projected profit before you even start. Essential for financial clarity.",
    worth: "₹4,999",
    price: "FREE",
    icon: ClipboardList,
  },

  {
    num: "02",
    title: "Vendor Comparison Checklist",
    desc: "Stop overpaying for supplies. Use this checklist to compare multiple vendors on quality, price, and delivery, ensuring you get the best deal for your café's inventory.",
    worth: "₹2,999",
    price: "FREE",
    icon: FileText,
  },
  {
    num: "03",
    title: "Launch Day Marketing Assets",
    desc: "Go live with a bang. Get a collection of high-converting social media templates, WhatsApp blast scripts, and grand opening posters to flood your café with customers.",
    worth: "₹7,000",
    price: "FREE",
    icon: Zap,
  },
];

export default function Bonuses() {
  return (
    <section className="bg-[#0b0f0e] sm:py-24 py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#ff6a00] text-xs tracking-[0.3em] uppercase mb-4">
            Booking Bonuses
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Resource <span className="text-[#ff6a00] italic">Toolkit</span> Worth ₹15,000
          </h2>
          <p className="text-white pt-2">
            Get these instantly after booking your strategy call to kickstart your planning.
          </p>
          <div className="w-16 h-[2px] bg-[#ff6a00] mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {bonuses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#ff6a00]/30 to-transparent hover:from-[#ff6a00] transition duration-500"
              >
                {/* Inner */}
                <div className="relative h-full bg-[#121817] rounded-3xl p-7 border border-gray-800 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition">

                  {/* Big number */}
                  <span className="absolute top-5 right-6 text-6xl font-bold text-white/5">
                    {b.num}
                  </span>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#ff6a00]/10 group-hover:bg-[#ff6a00] transition">
                      <Icon className="w-7 h-7 text-[#ff6a00] group-hover:text-black" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-[#ff6a00]/10 text-[#ff6a00] text-xs px-3 py-1 rounded-full mb-3">
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

                    {/* <span className="text-[#ff6a00] text-lg font-bold">
                      {b.price}
                    </span>

                    <span className="text-[10px] bg-[#ff6a00] text-black px-2 py-[2px] rounded-full font-semibold">
                      INCLUDED
                    </span> */}
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#ff6a00]/5 rounded-3xl pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}