import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

/* …CARDS array stays exactly the same… */
const CARDS = [
  {
    href: "/features/online-video-hosting",
    poster:
      "https://vimeo.bynder.com/transform/b716620e-187c-4d76-b1fa-4a9d8057a3ab/-High-Quality-Maker-Vimeo-Shoot",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069334274/rendition/540p/file.mp4?loc=external&signature=1ee9a7299b88eef0e3ed63566b05d575cac3366ce98bce4114a2ae322a5470a9",
    title: "Host in high quality, ad-free",
    desc:
      "Ensure your videos play in their highest resolution — always ad-free.",
    cta: "Learn about video hosting",
  },
  {
    href: "/features/video-collaboration",
    poster:
      "https://vimeo.bynder.com/transform/1b7341fa-3354-4cf5-9179-08a73f361c89/Collaborate-Maker-Vimeo-Shoot",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069333758/rendition/540p/file.mp4?loc=external&signature=216d708efea007d448ab4ccd9c36e71c253e956300cff34713711ede56442573",
    title: "Collaborate with anyone",
    desc:
      "Share cuts for review, add time-coded notes, and track versions in one spot.",
    cta: "Learn about collaboration",
  },
  {
    href: "/features/video-player",
    poster:
      "https://vimeo.bynder.com/transform/5c76fa69-2923-4035-bcb0-41ba151a807a/Embed-Player-Maker",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069333558/rendition/540p/file.mp4?loc=external&signature=a76cd5f38e9f59f20a50e3e440b6c5322cfe0b3230f94d8651e62289046d1467",
    title: "Embed anywhere",
    desc:
      "Drive traffic back to your site with our fast, brandable player.",
    cta: "Learn about player",
  },
  {
    href: "/features/video-privacy",
    poster:
      "https://vimeo.bynder.com/transform/2251686f-551b-497b-9ad0-1f318e75e8a2/Keep-Video-Secure-Vimeo-Shoot",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069333177/rendition/540p/file.mp4?loc=external&signature=0e2796732a35b8b49db567204d88b3c88d25f7b630e02a0b7101f60b5bf5b9a7",
    title: "Keep videos secure",
    desc:
      "Granular permissions, password protection, and advanced privacy controls.",
    cta: "Learn about security",
  },
  {
    href: "/ott",
    poster:
      "https://vimeo.bynder.com/transform/f1f04b50-96bc-4ec0-93f8-ab7caa71031f/Sell-Content-Vimeo-Shoot",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069332461/rendition/540p/file.mp4?loc=external&signature=091de529f5ff88f52584a0b882c23a6cb692594dc08bb5e4fa8393f94ccbded3",
    title: "Sell your content",
    desc:
      "Launch rentals, subscriptions, or pay-per-view channels in a few clicks.",
    cta: "Learn about monetization",
  },
  {
    href: "/features/livestreaming",
    poster:
      "https://vimeo.bynder.com/transform/4e65f8a0-342a-4fbd-a8ae-1f17c6f676fe/Live-Streaming-Eagles",
    videoSrc:
      "https://player.vimeo.com/progressive_redirect/playback/1069331853/rendition/540p/file.mp4?loc=external&signature=0746a225f5773079ebce4fa2bff7b92b078e51610449124734dd8079c9d57eda",
    title: "Stream live with confidence",
    desc:
      "Run virtual events, webinars, and broadcasts with rock-solid reliability.",
    cta: "Learn about live streaming",
  },
];

/* ───────────────── helper hook ───────────────── */
const useAutoplayInView = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.play(),
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return ref;
};

/* ───────────────── single card component ─────── */
function VideoCard({ card, index }) {
  const vidRef = useAutoplayInView();
  return (
    <li
      className="animate-subtle-fade"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <a
        href={card.href}
        className="group flex h-full flex-col overflow-hidden rounded-3xl"
      >
        {/* video */}
        <div className="relative aspect-[4/3] w-full">
          <video
            ref={vidRef}
            muted
            playsInline
            preload="metadata"
            poster={card.poster}
            src={card.videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* copy */}
        <div className="flex flex-grow flex-col items-center gap-6 p-6 text-center">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm text-neutral-300">{card.desc}</p>

          {/* desktop CTA */}
          <div className="mt-auto hidden md:block">
            <CTAButton label={card.cta} />
          </div>
        </div>

        {/* mobile CTA */}
        <div className="block md:hidden px-4 pb-4">
          <CTAInline label={card.title} />
        </div>
      </a>
    </li>
  );
}

/* ───────────────── main grid component ───────── */
export default function VideoPlatformCards() {
  return (
    <section className="bg-neutral-900 text-white px-20 py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4">
        <h2 className="mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
          The platform that powers your video strategy
        </h2>

        <ul className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <VideoCard key={c.title} card={c} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────── CTA styles ─────────────────── */
const CTAButton = ({ label }) => (
  <span
    className={`relative inline-flex items-center justify-center
      rounded-lg bg-yellow-400 px-8 py-3
      font-extrabold tracking-wide text-black uppercase
      shadow-[-4px_4px_0_0_#000]
      transition-[shadow,transform] duration-150 ease-out
       hover:translate-x-1 hover:-translate-y-1
      focus:outline-none`}
  >
   
    {label}
  </span>
);

const CTAInline = ({ label }) => (
  <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:underline">
    {label}
    <ArrowRight className="h-4 w-4 shrink-0" />
  </span>
);
