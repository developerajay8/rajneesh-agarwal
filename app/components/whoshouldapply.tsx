"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  User,
  BadgeDollarSign,
  Home,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const data = [
  {
    icon: Building2,
    title: "Aspiring Café Owners",
    desc: "Escape the 9–5 grind. I'll show you how to build a system-driven business that doesn't require your presence 24/7.",
  },
  {
    icon: User,
    title: "Working Professionals",
    desc: "Start a side business while keeping your job and build passive income streams.",
  },
  {
    icon: BadgeDollarSign,
    title: "Beginners with Zero Experience",
    desc: "No experience? Learn everything step-by-step from scratch.",
  },
  {
    icon: Home,
    title: "Investors and Idea-Holders",
    desc: "Turn your ideas into profitable café or cloud kitchen businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Food Passionate Entrepreneurs",
    desc: "Love food and want to build a business around it with less risk.",
  },
  {
    icon: AlertTriangle,
    title: "People Afraid of Business Failure",
    desc: "Avoid common mistakes and build a safe, scalable business.",
  },
];

export default function WhoShouldApply() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0b0f0e] text-white sm:py-24 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 tracking-widest text-sm mb-2">
            IS THIS FOR YOU?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who Should <span className="text-orange-500 italic">Apply</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {data.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer rounded-full px-6 py-4 flex items-center gap-4 transition-all duration-300 border
                  ${
                    isActive
                      ? "border-orange-500 shadow-[0_0_30px_rgba(255,115,0,0.2)] bg-[#111]"
                      : "border-[#222] hover:border-orange-400"
                  }`}
                >
                  <Icon className="text-orange-400 w-5 h-5" />
                  <span className="text-sm md:text-base">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-[#111] border border-[#222] rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  {data[active].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {data[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}