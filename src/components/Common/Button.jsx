import React from "react";

/* -------------------------------- Buy Now -------------------------------- */
export const BuyNowCTA = ({ full = false }) => (
  <a
    href="https://www.goto.com/pricing/webinar"
    className={`
      relative inline-flex items-center justify-center
      font-semibold text-white bg-black rounded-lg
      ${full ? "w-full px-0" : "px-8"} py-3
      shadow-[-4px_4px_0_0_#FFD400]
      transition-shadow duration-150 ease-out
       hover:translate-x-1 hover:-translate-y-1 focus:outline-none
    `}
  >
    Buy&nbsp;Now
  </a>
);

/* ------------------------------- Try Free -------------------------------- */
export const TryFreeCTA = () => (
  <a
    href="https://www.goto.com/webinar/trial"
    className="
      relative inline-flex items-center justify-center
      px-8 py-3 font-semibold rounded-lg
      text-black bg-white border-2 border-black
      shadow-[-4px_4px_0_0_#000]
      transition-shadow duration-150 ease-out
      hover:translate-x-1 hover:-translate-y-1
    "
  >
    Try&nbsp;Free
  </a>
);

/* --------------------------- Register Now (yellow) ------------------------ */
export const RegisterNowBtn = ({ className = "" }) => (
  <a
    href="#register"
    className={`
      relative inline-flex items-center justify-center
      rounded-lg bg-yellow-400 px-8 py-3
      font-extrabold tracking-wide text-black uppercase
      shadow-[-4px_4px_0_0_#000]
      transition-[shadow,transform] duration-150 ease-out
       hover:translate-x-1 hover:-translate-y-1
      focus:outline-none
      ${className}
    `}
  >
    Register&nbsp;Now
  </a>
);


/* --- Book Now (yellow offset) --- */
export const BookNowCTA = ({ full = false }) => (
  <a
    href="#book"
    className={`
      relative inline-flex items-center justify-center
      font-semibold text-white bg-black rounded-lg
      ${full ? "w-full px-0" : "px-8"} py-3
      shadow-[-4px_4px_0_0_#FFD400]  /* yellow accent */
      transition-shadow duration-150 ease-out
       hover:translate-x-1 hover:-translate-y-1 focus:outline-none
    `}
  >
    Book&nbsp;Now
  </a>
);


