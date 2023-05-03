/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sc-blue": "#0077c0",
      },
      keyframes: {
        cardHover: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.0125)",
          },
        },
        cardHoverOff: {
          "0%": {
            transform: "scale(1.0125)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        cardHover: "cardHover 0.375s both",
        cardHoverOff: "cardHoverOff 0.375s",
      },
    },
  },
  plugins: [],
};
