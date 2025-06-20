import React from "react";
import {
  TrendingUp,
  PieChart,
  Target,
  MessageCircle,
} from "lucide-react";
import { RegisterNowBtn } from "../../../components/Common/Button";

/* ————— Card data ————— */
const bullets = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Decode Market Trends\nwith Expert Insight",
    body:
      "Gain a deep understanding of current market trends and learn how to turn them to your advantage.",
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Diversify Your Portfolio\nLike a Pro",
    body:
      "Our experts explain how to balance risk and reward across multiple asset classes.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Set Your Goals & Build\na Plan for Growth",
    body:
      "Define clear financial goals and align your investments for long-term success.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Live Q&A: Ask the\nExperts Anything",
    body:
      "Bring your questions—get direct, personalized answers from our hosts.",
  },
];

export default function LearnSection() {
  return (
    <section id="learn" className="bg-white py-10 sm:py-12">
          <header className="mb-16 max-w-5xl text-center mx-auto">
  <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-6">
            Multiply your digital engagement results
          </h2>
          <p className="text-md font-medium">
            Turn your webinars into AI-powered personalized content journeys
            with the next generation of ON24.
          </p>
        </header>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Poster */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src="https://cdn.prod.website-files.com/60b550ccbb1a59f65dc28805/661e5dd311f21f7951fd33bf_Encontrar%2520empleados%2520empresa%2520servcios-1.jpeg"
              alt="Webinar promo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="mb-8 text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-yellow-400 drop-shadow-md">
                What You’ll Learn
                <br />
                in This Free Webinar
              </h3>
              <RegisterNowBtn />
            </div>
          </div>

          {/* Bullet grid */}
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            {bullets.map(({ icon, title, body }) => (
              <article
                key={title}
                className="
                  flex items-start gap-4
                  rounded-xl bg-white/80 p-6 backdrop-blur
                  transition-all duration-200 ease-out hover:-translate-y-1
                "
              >
                <span className="flex items-center justify-center rounded-full bg-black p-2 text-yellow-400">
                  {icon}
                </span>
                <div>
                  <h4 className="whitespace-pre-line text-xl font-extrabold leading-snug text-gray-900">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
