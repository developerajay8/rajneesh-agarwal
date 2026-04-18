"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much money is needed to start?",
    a: "You can start a cloud kitchen or QSR model with as little as ₹2–5 lakhs...",
  },
  {
    q: "Do I need a chef?",
    a: "No. We teach the Chefless Cafe Model — a proven system...",
  },
  {
    q: "How will I get sales?",
    a: "You'll learn a complete sales system including Instagram growth...",
  },
  {
    q: "Do I need any prior knowledge?",
    a: "Not at all. This workshop is designed for beginners...",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0b0f0c] py-28 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px] rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-300/40 text-xs tracking-[0.4em] uppercase mb-4">
            Need Help?
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-green-100">
            Frequently Asked{" "}
            <span className="italic text-green-400">Questions</span>
          </h2>

          <div className="w-20 h-[2px] bg-green-400/40 mx-auto mt-6" />
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/40 transition-all"
            >

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-green-100 font-medium">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6">
                  <p className="text-green-200/70 text-sm pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}