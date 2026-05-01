"use client";

import { useState } from "react";
import { Wallet, Scale, MapPin, FileText, Sparkles } from "lucide-react";

const tabs = [
  {
    key: "budget",
    title: "BUDGET",
    icon: Wallet,
    heading: "budget planning",
    desc: "Master your finances with clear CAPEX and OPEX planning to avoid hidden costs and ensure high ROI from day one.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    key: "model",
    title: "MODEL",
    icon: Scale,
    heading: "business model selection",
    desc: "Identify the perfect operational model to match your scale, investment goals, and market demand for sustainable growth.",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    key: "location",
    title: "LOCATION",
    icon: MapPin,
    heading: "location analysis",
    desc: "Execute our proprietary 3-step audit to find the most profitable spots before you commit to any long-term lease.",
    video: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    key: "menu",
    title: "MENU",
    icon: FileText,
    heading: "menu engenerring",
    desc: "Craft a high-conversion menu that expertly balances low raw material costs with high customer perceived value.",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    key: "brand",
    title: "BRAND",
    icon: Sparkles,
    heading: "brand building",
    desc: "Design a unique visual and emotional identity that turns first-time visitors into loyal brand advocates.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
];

export default function FrameworkSection() {
  const [active, setActive] = useState("location");

  const current = tabs.find((t) => t.key === active);

  return (
    <section className="bg-black text-white sm:py-24 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#ff6a00] text-xs tracking-[0.3em] uppercase mb-4">
            STEP-BY-STEP GUIDANCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Framework We'll{" "}
            <span className="text-[#ff6a00]">Build</span>
            <br /> Together
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT VIDEO */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[#ff6a00]/20">
            <iframe
              src={current?.video}
              title="YouTube video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = active === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    className={`flex flex-col items-center gap-2 sm:px-4 sm:py-3 sm:rounded-2xl sm:border transition ${
                      isActive
                        ? "border-[#ff6a00] text-[#ff6a00]"
                        : "border-white/10 text-gray-400 hover:border-[#ff6a00]/40"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        isActive
                          ? "bg-[#ff6a00] text-black"
                          : "bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs tracking-wide">
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="border border-[#ff6a00]/20 rounded-2xl p-6 bg-[#0d0d0d]">
              <h3 className="text-xl font-semibold text-[#ff6a00] mb-3">
                {current?.heading}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {current?.desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}