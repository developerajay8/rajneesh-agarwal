"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How much money is needed to start?",
    a: "You can start a cloud kitchen or QSR model with as little as ₹2–5 lakhs. We break down exact budgeting based on your city, rent, and food model.",
  },
  {
    q: "Do I need a chef?",
    a: "No. We teach the Chefless Cafe Model — a proven system to run a profitable food business without depending on a chef.",
  },
  {
    q: "How will I get sales?",
    a: "You'll learn a complete sales system including Instagram growth, local marketing, and repeat customer strategies.",
  },
  {
    q: "Do I need any prior knowledge?",
    a: "Not at all. This workshop is designed for beginners as well as existing cafe owners who want to scale.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-[#1f1c1d] to-[#2a2526] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#edd9c0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Need Help?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#edd9c0]">
            Frequently Asked{" "}
            <span className="italic text-[#c9a96e]">Questions</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#edd9c0] mx-auto mt-6 opacity-20" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#c9a96e]/40"
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between cursor-pointer px-6 py-5 text-left"
              >
                <span className="text-[#edd9c0] font-medium text-base">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#c9a96e] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6">
                  <p className="text-[#edd9c0]/70 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">

          <p className="text-[#c9a96e] text-sm mb-3">
            🔥 Only 20 Spots Left — Filling Fast
          </p>

          <p className="text-[#edd9c0]/50 text-xs mb-6">
            Still have questions? Chat with us directly on WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/917733086753"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#edd9c0] text-[#1f1c1d] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <a
              href="#reserve"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-[#edd9c0] hover:bg-white/5 transition-all duration-300"
            >
              Reserve My Spot →
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}