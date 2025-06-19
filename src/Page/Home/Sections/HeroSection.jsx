import React from "react";
import { Play } from "lucide-react";
import { BuyNowCTA, TryFreeCTA } from "../../../components/Common/Button";

export default function HeroSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-cover bg-center bg-no-repeat
        text-center lg:text-left
      "
      style={{
        backgroundImage:
          "url('https://www.goto.com/-/media/images/url/webinar/sub-content/go-hero.jpg')",
      }}
    >
      <span aria-hidden className="absolute inset-0 bg-black/10 lg:hidden" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white lg:text-gray-900">
            Hassle-free webinar
            <br className="hidden lg:block" />
            software
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/90 lg:text-gray-700">
            From remote employee trainings to hybrid all-hands; pre-recorded
            product demos to multi-day conferences —{" "}
            <strong className="font-semibold">GoTo&nbsp;Webinar</strong> makes
            events easy.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <BuyNowCTA />
            <TryFreeCTA />
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <img
            src="https://www.goto.com/-/media/images/url/webinar/sub-content/go-hero---foreground.png?h=740&w=1110&hash=27BE6FBB3BBFF0F9F0C4AC025C4790F3"
            alt="GoTo Webinar demo"
            className="w-full rounded-xl shadow-lg"
          />
          <button
            aria-label="Play video"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=ZCTcfIbq5T8",
                "_blank"
              )
            }
            className="absolute inset-0 flex items-center justify-center focus:outline-none"
          >
            <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-yellow-300/60 backdrop-blur-md">
              <svg viewBox="0 0 144 144" className="absolute h-24 w-24">
                <circle
                  r="62.5"
                  cx="72"
                  cy="72"
                  fill="transparent"
                  stroke="#ffe900"
                  strokeWidth="18"
                />
              </svg>
              <Play className="relative z-10 h-10 w-10 text-gray-900" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
