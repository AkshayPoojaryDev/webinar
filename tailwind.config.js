/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        /* 350 ms fade-up; we’ll stagger via inline style */
        "subtle-fade": "subtleFade .35s both",
      },
      keyframes: {
        subtleFade: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)"  },
        },
      },
    },
  },
  plugins: [],
};
