"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this consultation only for Coffee Shops?",
    a: "Not at all! The formulas I share apply to Drive-thrus, Kiosks, QSR models, and themed Cafés as well. If you serve food and beverage, I can help you scale.",
  },
  {
    q: "I have zero experience. Can I still start?",
    a: "Yes. In fact, most of my successful clients started from scratch. My roadmap is designed to guide you through every technical, operational, and legal hurdle.",
  },
  {
    q: "What exactly happens in the 60-min call?",
    a: "We conduct a deep-dive audit of your plan, identify potential cost-leaks, and finalize a high-conversion brand positioning for your unique market.",
  },
  {
    q: "Is this session for existing owners too?",
    a: "Absolutely. If your café is struggling or you want to launch a second branch, I help with turnaround strategies and system-driven scaling.",
  },
  {
    q: "When will I receive the ₹15k bonuses?",
    a: "All bonus resources (Profit Sheet, Vendor Checklist, etc.) will be delivered to your inbox immediately after we finish our 1-on-1 session.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. I offer a 100% Satisfaction Guarantee. If you feel the strategy call wasn't valuable for your venture, just tell me at the end of the call, and we'll refund your ₹999 on the spot. No questions asked.",
  }
  
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0b0f0c] sm:py-24 py-12 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff6a00]/10 blur-[140px] rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff6a00]/40 text-xs tracking-[0.4em] uppercase mb-4">
          Questions?
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#ffffff]">
            Frequently Asked {" "}
            <span className="italic text-[#ff6a00]">Questions</span>
          </h2>

          <div className="w-20 h-[2px] bg-[#fff] mx-auto mt-6" />
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group bg-white/5  backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a00]/40 transition-all"
            >

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center cursor-pointer justify-between px-6 py-5 text-left"
              >
                <span className="text-[#ff6a00]/90 font-medium">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#ff6a00] transition-transform duration-300 ${
                    open === i ? "rotate-180 " : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all  duration-500 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6">
                  <p className="text-[#fff] text-sm pb-5">
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