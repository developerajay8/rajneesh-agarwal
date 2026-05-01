"use client";

import { useRef } from "react";

type VideoItem = {
  src: string;
  title: string;
  subtitle: string;
};

const videos: VideoItem[] = [
  {
    src: "/What my Client Mr Praveen says About me After taking Growth Cafe Consultation from meI visited T.mp4",
    title: "Dream to Reality",
    subtitle: "PRODUCT LAUNCH SUCCESS",
  },
  {
    src: "/✨ Part 2 - From Dream to Reality- We Finalized Their First Product – Maggi! 🍜After finalizing t.mp4",
    title: "Boosting Sales",
    subtitle: "STAFF & MENU OPTIMIZATION",
  },
  {
    src: "/🔥 Struggling with low cafe sales Untrained staff Confused about your menuThese were the exact i.mp4",
    title: "Mr. Praveen",
    subtitle: "GROWTH CAFE CONSULTATION",
  },
];

export default function VideoTestimonials() {
  // ✅ Proper ref typing
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // ✅ Play one, pause others
  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <section className="bg-[#0b0f0e] text-white sm:py-24 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <p className="text-orange-500 text-xs tracking-widest mb-2">
          SUCCESS STORIES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          What My <span className="text-orange-500 italic">Clients</span> Say
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-sm">
          Real stories from aspiring entrepreneurs who turned their café dreams into reality.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          {videos.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Mobile Frame */}
              <div className="relative w-[260px] h-[520px] bg-black rounded-[40px] p-3 border border-[#222] shadow-[0_0_40px_rgba(255,115,0,0.15)]">

                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10"></div>

                {/* Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el; // ✅ FIXED
                  }}
                  src={item.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[30px]"
                  onPlay={() => handlePlay(index)}
                />
              </div>

              {/* Text */}
              <div className="mt-4 text-center sm:mb-0 mb-4">
                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="text-[10px] text-orange-500 tracking-wider mt-1">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}