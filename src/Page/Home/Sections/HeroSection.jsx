import React, { useState, useEffect } from "react";
import { BuyNowCTA, TryFreeCTA } from "../../../components/Common/Button";

export default function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollY    = window.scrollY;
      const maxScroll = 700;    // how far you scroll before reaching minScale
      const minScale  = 0.8;    // the smallest scale
      // linearly interpolate from 1 → minScale
      const fraction = Math.min(scrollY / maxScroll, 1);
      const newScale = 1 - fraction * (1 - minScale);
      setScale(newScale);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden text-center h-screen">
      {/* Background video container */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://player.vimeo.com/progressive_redirect/playback/1069021926/rendition/720p/file.mp4?loc=external&signature=8cfe0374460e6987523da7a4a3ad195acf04529e4c45a6bc90ef38b520611f72"
          autoPlay
          muted
          loop
          playsInline
          // apply the dynamic scale & origin
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* dark overlay */}
      <div
      style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",}}
      className="absolute inset-0 bg-black/60" />

      {/* centered content */}
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Hassle-free webinar
          <br className="hidden lg:block" />
          software
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/90">
          From remote employee trainings to hybrid all-hands; pre-recorded product demos
          to multi-day conferences —{" "}
          <strong className="font-semibold">GoTo Webinar</strong> makes events easy.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <BuyNowCTA />
          <TryFreeCTA />
        </div>
      </div>
    </section>
  );
}
