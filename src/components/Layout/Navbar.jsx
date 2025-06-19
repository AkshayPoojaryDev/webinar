import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookNowCTA, TryFreeCTA } from "../Common/Button";

/* --- Primary menu ----------------------------- */
const navLinks = [
  { label: "Option 1", href: "#opt1" },
  { label: "Option 2", href: "#opt2" },
  { label: "Option 3", href: "#opt3" },
];

/* …imports & state unchanged… */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:py-3">
        {/* 1️⃣ Logo – fixed left */}
        <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Webinar
        </a>

        {/* 2️⃣ Nav links – take the middle, centered */}
        <ul className="hidden lg:flex flex-1 justify-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-gray-900">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* 3️⃣ CTA buttons – fixed right */}
        <div className="hidden lg:flex items-center gap-4">
          <BookNowCTA />
          <TryFreeCTA />
        </div>

        {/* Mobile hamburger */}
        <button
          className="-mr-2 p-2 lg:hidden ml-auto"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer (unchanged) */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner">
          {/* links */}
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {label}
            </a>
          ))}

          {/* CTAs */}
          <div className="border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <BookNowCTA full />
            <TryFreeCTA full />
          </div>
        </div>
      )}
    </header>
  );
}

