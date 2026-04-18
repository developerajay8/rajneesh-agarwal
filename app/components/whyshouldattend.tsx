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
    <section className="relative bg-[#0b0f0e] py-24 px-6 text-white overflow-hidden">

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-4">
            Is This For You?
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Who Should <span className="italic text-green-500">Attend</span>
          </h2>

          <div className="w-16 h-[2px] bg-green-500/40 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#121817] border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-green-500/10 to-transparent" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500 transition">
                    <Icon className="w-6 h-6 text-green-500 group-hover:text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {a.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-[#121817] p-10 text-center border border-gray-800 shadow-2xl">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Only <span className="text-green-500">100 Seats</span> Available
          </h3>

          <p className="text-gray-400 text-sm mb-8">
            Limited slots remaining — secure your place before it's gone.
          </p>

          <a
            id="reserve"
            href="https://wa.me/917733086753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-black font-semibold px-10 py-4 rounded-xl text-sm hover:bg-green-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
          >
            Reserve My Free Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}