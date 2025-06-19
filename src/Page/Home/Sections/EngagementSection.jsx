import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/* videos + copy */
const TABS = [
  {
    vimeoId: "1053057620",
    title: "Segment your audience",
    desc:
      "Turn your webinars into personalized content journeys with the next generation of ON24.",
  },
  {
    vimeoId: "1053057609",
    title: "Personalize your experiences",
    desc:
      "Deliver unique content, messaging and calls-to-action to audience segments across your webinars, content hubs and landing pages.",
  },
  {
    vimeoId: "1053057595",
    title: "Analyze your performance",
    desc:
      "Understand the most impactful moments of your events with a heat-map report of audience engagement.",
  },
  {
    vimeoId: "1053057582",
    title: "Repurpose your content",
    desc:
      "Use AI to instantly turn long-form presentations into new assets like e-books, blogs and snackable video highlights.",
  },
];

export default function EngagementSection() {
  const [active, setActive] = useState(0);
  const { vimeoId } = TABS[active];

  return (
    <section id="engage" className="bg-[#FFD400] text-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
       <header className="mb-16 max-w-5xl text-center mx-auto">
  <h2 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Multiply your digital engagement results
          </h2>
          <p className="text-lg font-medium">
            Turn your webinars into AI-powered personalized content journeys
            with the next generation of ON24.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Video */}
          <div className="overflow-hidden rounded-xl">
            <div className="relative pt-[56.25%]">
              <iframe
                key={vimeoId}
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&autopause=0&loop=1&muted=1&transparent=0`}
                allow="autoplay"
                title="Vimeo player"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Accordion */}
          <div>
            {TABS.map(({ title, desc }, idx) => {
              const open = idx === active;
              return (
                <div
                  key={title}
                  className={`
                    border-b border-black/20
                    ${open ? "bg-black/5" : "hover:bg-black/10"} transition-colors
                  `}
                >
                  <button
                    onClick={() => setActive(idx)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-xl font-bold focus:outline-none"
                  >
                    <span>{title}</span>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="px-6 pb-6 pt-1 text-base leading-relaxed">
                      {desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
