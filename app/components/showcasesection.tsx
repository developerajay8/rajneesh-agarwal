"use client";

export default function ShowcaseSection() {
  const images = ["/g.png", "/g2.png", "/g3.png", "/image copy.png"];

  return (
    <section className="sm:py-24 py-12 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Top Tag */}
        <p className="text-center text-[#ff6a00] text-xs tracking-[0.3em] uppercase mb-4">
        Limited Availability
        </p>

        {/* Heading */}
        {/* <h2 className="text-center text-4xl md:text-6xl font-bold mb-16">
          Seats Are Running Out —{" "}
          <span className="text-[#ff6a00]">Fast</span>
        </h2> */}

         <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold ">
            Seats Are Running Out —{" "} <span className="italic text-[#ff6a00]">Fast</span>
          </h2>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-[180px] md:h-[220px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0d0d0d] border border-[#ff6a00]/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,106,0,0.1)]">

            {/* Label */}
            <p className="text-center text-gray-400 text-sm tracking-wide mb-6">
              SPOTS FILLED THIS WEEK
            </p>

            {/* Big Number */}
            <h3 className="text-center text-6xl font-bold text-[#ff6a00] mb-2">
              09
            </h3>

            <p className="text-center text-gray-400 mb-6">
              / 10 Slots Available
            </p>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/10 rounded-full mb-4">
              <div className="w-[90%] h-full bg-[#ff6a00] rounded-full" />
            </div>

            {/* Warning */}
            <p className="text-center text-red-400 text-sm mb-8">
              🔴 Only a few slots left for this week's batch
            </p>

            {/* CTA */}
            <a
             
              className="block cursor-pointer text-center bg-gradient-to-r from-[#ff6a00] to-black-500 hover:bg-orange-500 transition text-black font-semibold py-4 rounded-full"
            >
              Reserve My Spot Now 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}