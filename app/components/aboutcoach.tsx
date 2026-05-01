"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const stats = [
  { val: "47.7K+", label: "Followers" },
  { val: "5+ Yrs", label: "Experience" },
  // { val: "239+", label: "Content Posted" },
  // { val: "1 Yr+", label: "Consulting" },
];

export default function AboutCoach() {
  return (
    <section className="relative bg-[#0b0f0e] sm:py-24 py-12 px-6 overflow-hidden text-white">

      {/* Grain Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff6a00]/10 blur-[120px]" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-[#ff6a00]/10 blur-2xl" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-8 bg-[#ff6a00]/20 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition" />

            {/* Image */}
            <div className="relative w-[280px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/hero.png"
                alt="Rajneesh Agarwal"
                fill
                className="object-cover object-top group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-6 bg-[#121817] border border-gray-800 px-6 py-4 rounded-2xl shadow-xl">
              {stats.slice(0, 2).map((s) => (
                <div key={s.val} className="text-center">
                  <p className="text-[#ff6a00] font-bold text-lg">{s.val}</p>
                  <p className="text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="text-gray-500 text-xs tracking-[0.4em] uppercase mb-4">
           Rajneesh Agarwal
          </p>

          <h2 className="text-4xl md:text-4xl font-semibold text-white mb-4 leading-tight">
           Experienced <span className="text-[#ff6a00]">  Café Strategist </span>
& Startup Consultant
          </h2>

          <p className="text-[#ff6a00] text-sm mb-6">
            Cafe Coach · Consultant · Cafe Owner — Jaipur
          </p>

          <p className="text-gray-400 leading-relaxed mb-5">
            Hi, I'm Rajneesh — a dedicated café strategist and food business consultant with a track record of building and scaling profitable brands. I don't just advise; I implement high-growth frameworks every day.
          </p>

         

          <p className="text-gray-500 leading-relaxed mb-10">
            Over the last 5+ years, I've mentored 50,000+ entrepreneurs to navigate the complex world of food business. My 5-Pillar Profitable Café Framework is designed to transform your dream into a sustainable, high-margin reality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
            {stats.map((s) => (
              <div
                key={s.val}
                className="group bg-[#121817] border border-gray-800 rounded-xl p-5 text-center hover:bg-[#ff6a00] transition-all duration-300 hover:scale-105"
              >
                <p className="text-[#ff6a00] group-hover:text-black font-bold text-xl">
                  {s.val}
                </p>
                <p className="text-gray-400 group-hover:text-black/70 text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://www.instagram.com/cafeconsultant_rajneesh"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#121817] border border-gray-800 text-white px-6 py-3 rounded-xl hover:border-[#ff6a00] hover:text-[#ff6a00] transition-all duration-300"
          >
            <FaInstagram />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}