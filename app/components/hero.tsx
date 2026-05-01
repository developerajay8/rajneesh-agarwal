import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0b0f0e] overflow-hidden flex items-center text-white">
      
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff6a00]/10 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#ff6a00]/10 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:pt-40 pt-30 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <span className="bg-amber-700 border border-[#ff6a00] px-3 py-1 rounded-full text-[12px] ">1-on-1 Strategy Session</span>
          <h1 className="text-4xl md:text-5xl xl:text-5xl leading-[1.1] mb-6 font-bold mt-5">
            Want to Start Your
Dream Café Business{" "}
            <span className="text-[#ff6a00] italic">But Don’t Know </span>
           
            Where to Begin?
          </h1>

          <p className="text-gray-400 text-base md:text-[16px] leading-relaxed mb-4 max-w-lg">
            Join India's Top Café Coach for a <span className="text-white">60-minute 1-on-1 strategy call</span> — and walk away with your complete café roadmap.
          </p>

          {/* Price */}
          {/* <div className="inline-flex items-center gap-3 bg-[#121817] border border-gray-800 rounded-2xl px-5 py-3 mb-8">
            <span className="text-gray-500 text-sm line-through">
              ₹999
            </span>
            <span className="text-[#ff6a00] font-bold text-2xl">
              ₹99
            </span>
            <span className="text-gray-400 text-sm">
              Consultation Call
            </span>
          </div> */}

          {/* CTA */}
          <div className="flex flex-wrap gap-4" id="consult">
            <a
              href="#reserve"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6a00] to-black-500 text-white"
            >
              Secure My 1-on-1 Slot Now
            </a>

            {/* <a
              href="https://wa.me/917733086753"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary-btn border border-[#ff6a00] text-[#ff6a00]"
            >
              WhatsApp Us
            </a> */}
          </div>

          {/* Urgency */}
          <p className="mt-6 text-[#ff6a00] text-[12px]">
            Only 7 Slots Available This Week <span className="text-gray-50">• Practical roadmap • Beginner friendly</span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">

            {/* Border Glow */}
            <div className="absolute -inset-4 rounded-3xl border border-[#ff6a00]/20 blur-sm opacity-30" />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#ff6a00]/10 to-transparent" />

            <div className="relative w-72 md:w-80 xl:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/hero.png"
                alt="Rajneesh Agarwal"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 -left-6 bg-[#121817] border border-gray-800 rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-bold text-[#ff6a00] text-xl">
                47.7K+
              </p>
              <p className="text-gray-400 text-xs">Followers</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#121817] border border-gray-800 rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-bold text-[#ff6a00] text-xl">
                5 Yrs
              </p>
              <p className="text-gray-400 text-xs">Experience</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}