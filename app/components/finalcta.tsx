"use client";
import Flotingmenu from "./flotingmenu";
export default function FinalCTA() {
  return (
    <section className="relative sm:py-24 py-12 px-6 bg-black text-white overflow-hidden ">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,106,0,0.08),transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs mb-8">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Limited Availability — Only 3 Consultation Slots Left This Week
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Stop Waiting. Start{" "}
          <span className="text-[#ff6a00]">Building.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10">
          Stop second-guessing your plan. Gain strategic clarity through Rajneesh’s 1-on-1 mentorship.
        </p>

        {/* Price */}
        <div className="mb-10">
          <span className="text-4xl md:text-5xl font-bold">₹999</span>
          <span className="text-gray-500 line-through ml-3">₹4,999</span>
        </div>

        {/* CTA */}
        <a
          href=""
          className="inline-block bg-gradient-to-r from-[#ff6a00] to-black-500 hover:bg-orange-500 transition text-black font-semibold px-10 py-4 rounded-full "
        >
          Reserve My Spot Now →
        </a>

        {/* Contact */}
        <p className="text-gray-500 text-sm mt-6">
          Questions?{" "}
          <a href="#" className="text-[#ff6a00] hover:underline">
            WhatsApp us
          </a>{" "}
          or{" "}
          <a href="#" className="text-[#ff6a00] hover:underline">
            Email us
          </a>
        </p>

        {/* Footer */}
        <div className="mt-16 text-gray-600 text-xs">
          <p>
            © 2026 Rajneesh Agarwal · All rights reserved · Café Startup Consultant
          </p>
          <p className="mt-2">
            Powered by <span className="text-white font-semibold">SocinioX</span>
          </p>
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6">
        <Flotingmenu/>
      </div>
    </section>
  );
}