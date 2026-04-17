import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#262324] overflow-hidden flex items-center">
      {/* Background texture grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4e3e36]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#edd9c0]/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-[#4e3e36] border border-[#edd9c0]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#edd9c0]/80 text-xs font-dm tracking-widest uppercase">
              Free 90-Min Live Workshop — 23rd July 2025
            </span>
          </div> */}

          <h1 className="font-playfair text-4xl md:text-5xl xl:text-6xl text-[#edd9c0] leading-[1.1] mb-6">
            Start & Scale Your{" "}
            <span className="italic text-[#c9a96e]">Food Business</span>
            <br />
            Without Loss
          </h1>

          <p className="text-[#edd9c0]/70 font-dm text-base md:text-lg leading-relaxed mb-4 max-w-lg">
            Even If You're a Complete Beginner. Learn the 5 Core Pillars to
            Build a Profitable Cafe, Cloud Kitchen, or QSR Business in 2025.
          </p>

          {/* Price highlight */}
          <div className="inline-flex items-center gap-3 bg-[#edd9c0]/10 border border-[#edd9c0]/20 rounded-2xl px-5 py-3 mb-8">
            <span className="text-[#edd9c0]/50 text-sm line-through font-dm">
              ₹999
            </span>
            <span className="text-[#c9a96e] font-playfair font-bold text-2xl">
              ₹99
            </span>
            <span className="text-[#edd9c0]/70 text-sm font-dm">
              Consultation Call
            </span>
          </div>

          {/* Info pills */}
          {/* <div className="flex flex-wrap gap-3 mb-8">
            {[
              "📅 23rd July 2025 · Wednesday",
              "💻 Live Online",
              "🎁 Free for Limited Time",
              "🎯 Get 5+ Resources Worth ₹25,000",
            ].map((item) => (
              <span
                key={item}
                className="bg-[#4e3e36]/60 border border-[#edd9c0]/10 text-[#edd9c0]/80 text-xs font-dm px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div> */}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4" id="consult">
            <a
              href="#reserve"
              className="bg-[#edd9c0] text-[#262324] font-dm font-bold text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-[#edd9c0]/20"
            >
              Reserve My Free Spot →
            </a>
            <a
              href="https://wa.me/917733086753"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#edd9c0]/30 text-[#edd9c0] font-dm font-semibold text-base px-8 py-4 rounded-full hover:bg-[#edd9c0]/10 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Urgency */}
          <p className="mt-6 text-[#c9a96e] font-dm text-sm">
            🔥 Only 100 Seats · Few Slots Left
          </p>
        </div>

        {/* RIGHT — Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute -inset-4 rounded-3xl border border-[#edd9c0]/10" />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#4e3e36]/40 to-transparent" />
            <div className="relative w-72 md:w-80 xl:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-[#edd9c0]/20 shadow-2xl">
              <Image
                src="/rajneesh.jpg"
                alt="Rajneesh Agarwal - Cafe Coach"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-[#edd9c0] rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-playfair font-bold text-[#262324] text-xl">
                45K+
              </p>
              <p className="font-dm text-[#4e3e36] text-xs">Followers</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#4e3e36] border border-[#edd9c0]/20 rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-playfair font-bold text-[#edd9c0] text-xl">
                5 Yrs
              </p>
              <p className="font-dm text-[#edd9c0]/70 text-xs">Cafe Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}