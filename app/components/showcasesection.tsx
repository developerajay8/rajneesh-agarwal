"use client";

export default function ShowcaseSection() {
  const images = ["/g.png", "/g2.png", "/g3.png"];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#02120b] to-[#000000]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#bbf7d0]/50 text-xs tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#bbf7d0]">
            Our <span className="italic text-[#22c55e]">Experience</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#22c55e] mx-auto mt-6 opacity-30" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[#22c55e]/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <img
                src={img}
                alt="gallery"
                className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-[#22c55e] font-medium tracking-wide">
                  View Details
                </span>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#22c55e]/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-[#bbf7d0]/50 text-sm mt-16">
          Real results from real cafe entrepreneurs 🚀
        </p>

      </div>
    </section>
  );
}