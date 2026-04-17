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
    <section className="bg-gradient-to-b from-[#1f1c1d] to-[#2a2526] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#edd9c0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Work With Me
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#edd9c0]">
            Consulting{" "}
            <span className="italic text-[#c9a96e]">Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((s, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl transition-all duration-500 ${
                s.highlight
                  ? "bg-gradient-to-b from-[#edd9c0] to-[#e6cfae] text-[#1f1c1d] scale-[1.03] shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
                  : "bg-white/5 border-white/10 hover:border-[#c9a96e]/40 hover:scale-[1.02]"
              }`}
            >

              {/* MOST POPULAR */}
              {s.highlight && (
                <span className="absolute top-5 right-5 text-[10px] bg-[#1f1c1d] text-[#edd9c0] px-3 py-1 rounded-full tracking-widest">
                  MOST POPULAR
                </span>
              )}

              {/* Tag */}
              <span
                className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block ${
                  s.highlight
                    ? "bg-[#1f1c1d] text-[#edd9c0]"
                    : "bg-[#edd9c0]/10 text-[#edd9c0]/60"
                }`}
              >
                {s.tag}
              </span>

              {/* Price */}
              <div className="flex items-end gap-3 mb-2">
                <p
                  className={`text-5xl font-bold ${
                    s.highlight ? "text-[#1f1c1d]" : "text-[#c9a96e]"
                  }`}
                >
                  {s.price}
                </p>

                {s.originalPrice && (
                  <span
                    className={`text-sm line-through mb-2 ${
                      s.highlight ? "text-[#5c514a]" : "text-[#edd9c0]/40"
                    }`}
                  >
                    {s.originalPrice}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1">
                {s.title}
              </h3>

              {/* Duration */}
              <p
                className={`text-xs mb-6 ${
                  s.highlight ? "text-[#5c514a]" : "text-[#edd9c0]/50"
                }`}
              >
                {s.duration}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {s.features.map((f, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 text-sm ${
                      s.highlight ? "text-[#3e3530]" : "text-[#edd9c0]/70"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 mt-0.5 text-[#c9a96e]" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/917733086753"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold text-sm px-6 py-4 rounded-full transition-all duration-300 ${
                  s.highlight
                    ? "bg-[#1f1c1d] text-[#edd9c0] hover:scale-105"
                    : "bg-[#edd9c0] text-[#1f1c1d] hover:bg-white hover:scale-105"
                }`}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-[#edd9c0]/40 text-sm">
            Trusted by aspiring cafe owners & food entrepreneurs across India
          </p>
        </div>
      </div>
    </section>
  );
}