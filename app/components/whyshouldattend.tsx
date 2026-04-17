"use client";

import {
  Coffee,
  Briefcase,
  Store,
  Pizza,
  Lightbulb,
  Rocket,
} from "lucide-react";

const audience = [
  {
    icon: Coffee,
    title: "Aspiring Café Owners",
    desc: "Want to start your own cafe but confused about where to begin or afraid of failure.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    desc: "Looking for a profitable side hustle that can generate extra income without quitting your job.",
  },
  {
    icon: Store,
    title: "Cloud Kitchen Owners",
    desc: "Already running a kitchen but struggling with low orders, branding, or profitability.",
  },
  {
    icon: Pizza,
    title: "Beginners in Food Business",
    desc: "No experience? No problem. Learn everything from scratch step-by-step.",
  },
  {
    icon: Lightbulb,
    title: "Passionate Food Lovers",
    desc: "Love food & business but afraid of losses or making wrong investments.",
  },
  {
    icon: Rocket,
    title: "Growth Seekers",
    desc: "Want to scale your existing cafe or food brand and increase consistent revenue.",
  },
];

export default function WhyShouldAttend() {
  return (
    <section className="bg-gradient-to-b from-[#f3e4cf] to-[#edd9c0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#6b5b52] text-xs tracking-[0.3em] uppercase mb-4">
            Is This For You?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f1c1d]">
            Who Should <span className="italic">Attend</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#1f1c1d] mx-auto mt-6 opacity-30" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-6 transition-all duration-500 hover:bg-[#1f1c1d] hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 to-transparent" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1f1c1d]/5 group-hover:bg-[#edd9c0] transition">
                    <Icon className="w-6 h-6 text-[#1f1c1d]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#1f1c1d] group-hover:text-[#edd9c0] mb-2 transition">
                  {a.title}
                </h3>

                <p className="text-sm text-[#5c514a] leading-relaxed group-hover:text-[#edd9c0]/80 transition">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Urgency Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-[#1f1c1d] p-10 text-center shadow-2xl">
          
          {/* Glow bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-semibold text-[#edd9c0] mb-3">
            Only <span className="text-[#c9a96e]">100 Seats</span> Available
          </h3>

          <p className="text-[#edd9c0]/70 text-sm mb-8">
            Limited slots remaining — secure your place before it's gone.
          </p>

          <a
            id="reserve"
            href="https://wa.me/917733086753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#edd9c0] text-[#1f1c1d] font-semibold px-10 py-4 rounded-full text-sm hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            Reserve My Free Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}