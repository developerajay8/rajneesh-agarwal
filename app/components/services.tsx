"use client";

import { CheckCircle } from "lucide-react";

const services = [
  {
    tag: "Service 01",
    title: "Online 1-on-1 Strategy Call",
    price: "₹99",
    originalPrice: "₹999",
    duration: "90-Minute Video Call",
    features: [
      "Zoom / Google Meet",
      "Flexible timing — your convenience",
      "Pre-call questionnaire",
      "Current business analysis",
      "Top 3 bottlenecks + solutions",
      "Custom 30-day action plan",
    ],
    cta: "Book Strategy Call",
    highlight: true,
  },
  {
    tag: "Service 02",
    title: "Full-Day Physical Cafe Audit",
    price: "₹50,000",
    originalPrice: null,
    duration: "8–10 Hour On-Site Audit",
    features: [
      "In-person cafe visit",
      "Detailed audit report",
      "Kitchen & chef dependency analysis",
      "Menu engineering (profit focus)",
      "Staff & training gaps",
      "Cost leakage & profit fixes",
    ],
    cta: "Book Cafe Audit",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#0b0f0c] py-28 px-6 overflow-hidden">
      
      {/* Green Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-300/40 text-xs tracking-[0.4em] uppercase mb-4">
            Work With Me
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-green-100 leading-tight">
            Consulting{" "}
            <span className="italic text-green-400">Services</span>
          </h2>

          <div className="w-20 h-[2px] bg-green-400/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl p-10 border transition-all duration-500 overflow-hidden ${
                s.highlight
                  ? "bg-gradient-to-b from-green-200 to-green-300 text-[#052e1a] scale-[1.04] shadow-[0_25px_90px_rgba(0,0,0,0.5)]"
                  : "bg-white/5 border-white/10 backdrop-blur-xl hover:border-green-400/40 hover:scale-[1.03]"
              }`}
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 to-transparent" />

              {/* MOST POPULAR */}
              {s.highlight && (
                <span className="absolute top-6 right-6 text-[10px] bg-[#052e1a] text-green-200 px-4 py-1 rounded-full tracking-widest shadow">
                  MOST POPULAR
                </span>
              )}

              {/* Tag */}
              <span
                className={`text-xs tracking-widest uppercase px-4 py-1 rounded-full mb-6 inline-block ${
                  s.highlight
                    ? "bg-[#052e1a] text-green-200"
                    : "bg-green-400/10 text-green-300/60"
                }`}
              >
                {s.tag}
              </span>

              {/* Price */}
              <div className="flex items-end gap-3 mb-4">
                <p
                  className={`text-6xl font-bold ${
                    s.highlight ? "text-[#052e1a]" : "text-green-400"
                  }`}
                >
                  {s.price}
                </p>

                {s.originalPrice && (
                  <span
                    className={`text-sm line-through mb-3 ${
                      s.highlight ? "text-green-800/60" : "text-green-300/40"
                    }`}
                  >
                    {s.originalPrice}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">
                {s.title}
              </h3>

              {/* Duration */}
              <p
                className={`text-xs mb-8 ${
                  s.highlight ? "text-green-900/70" : "text-green-300/50"
                }`}
              >
                {s.duration}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {s.features.map((f, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 text-sm ${
                      s.highlight ? "text-green-900" : "text-green-200/70"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/917733086753"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 ${
                  s.highlight
                    ? "bg-[#052e1a] text-green-200 hover:scale-110 hover:shadow-xl"
                    : "bg-green-400 text-[#052e1a] hover:bg-green-300 hover:scale-110 hover:shadow-lg"
                }`}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 text-center">
          <p className="text-green-300/30 text-sm tracking-wide">
            Trusted by aspiring cafe owners & food entrepreneurs across India
          </p>
        </div>
      </div>
    </section>
  );
}