/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#220054",
          100: "#330066",
          200: "#663366",
          300: "#e9e6ee",
        },
        blue: {
          DEFAULT: "#152C5B",
          100: "#1B2534",
          200: "#243543",
        },
        gray: {
          DEFAULT: "#777E90",
          100: "#737680",
          200: "#484B50",
          300: "#48546D",
          400: "#878787",
        },
        border: {
          DEFAULT: "#eeeeee",
          100: "#EDEDED",
        },
        error: "#f44336",
        successfully: "#009688",
        feature: {
          bg: "#eef2f3",
        },
        gold: "#C8A45D",
        news: {
          bg: "#F2F6FF",
        },
        footer: {
          active: {
            icon: "#cc9966",
          },
        },
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
