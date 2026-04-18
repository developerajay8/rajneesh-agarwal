"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0f0c] py-28 px-6 overflow-hidden">
      
      {/* Green Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-300/40 text-xs tracking-[0.4em] uppercase mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-green-100 mb-6 leading-tight">
            Let’s Build Your{" "}
            <span className="italic text-green-400">Cafe Business</span>
          </h2>

          <p className="text-green-200/70 leading-relaxed mb-10">
            Have questions about starting or scaling your cafe?  
            Reach out and we’ll guide you with the right strategy — no confusion, no fluff.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            {[
              { icon: Phone, text: "+91 77330 86753" },
              { icon: Mail, text: "cafepreneurs@gmail.com" },
              { icon: MapPin, text: "Jaipur, India" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-green-400/40 transition">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-green-200/80 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-green-300/30 text-xs mt-10">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

          <h3 className="text-green-100 text-xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">

            <div>
              <label className="text-xs text-green-300/50">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f1411] border border-white/10 text-green-100 placeholder:text-green-300/30 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label className="text-xs text-green-300/50">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f1411] border border-white/10 text-green-100 placeholder:text-green-300/30 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label className="text-xs text-green-300/50">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your plan..."
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0f1411] border border-white/10 text-green-100 placeholder:text-green-300/30 focus:outline-none focus:border-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-[#052e1a] font-semibold py-3 rounded-full hover:bg-green-300 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}