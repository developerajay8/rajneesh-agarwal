"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-[#1f1c1d] to-[#2a2526] py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#edd9c0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#edd9c0] mb-6">
            Let’s Build Your{" "}
            <span className="italic text-[#c9a96e]">Cafe Business</span>
          </h2>

          <p className="text-[#edd9c0]/70 leading-relaxed mb-8">
            Have questions about starting or scaling your cafe?  
            Reach out and we’ll guide you with the right strategy — no confusion, no fluff.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-5 h-5 text-[#c9a96e]" />
              </div>
              <p className="text-[#edd9c0]/80 text-sm">+91 77330 86753</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-[#c9a96e]" />
              </div>
              <p className="text-[#edd9c0]/80 text-sm">cafepreneurs@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#c9a96e]" />
              </div>
              <p className="text-[#edd9c0]/80 text-sm">Jaipur, India</p>
            </div>
          </div>

          {/* Small Note */}
          <p className="text-[#edd9c0]/40 text-xs mt-8">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

          <h3 className="text-[#edd9c0] text-xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-xs text-[#edd9c0]/50">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1c1d] border border-white/10 text-[#edd9c0] placeholder:text-[#edd9c0]/30 focus:outline-none focus:border-[#c9a96e]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-[#edd9c0]/50">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1c1d] border border-white/10 text-[#edd9c0] placeholder:text-[#edd9c0]/30 focus:outline-none focus:border-[#c9a96e]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-[#edd9c0]/50">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your plan..."
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1c1d] border border-white/10 text-[#edd9c0] placeholder:text-[#edd9c0]/30 focus:outline-none focus:border-[#c9a96e]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#edd9c0] text-[#1f1c1d] font-semibold py-3 rounded-full hover:bg-white transition-all duration-300"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}