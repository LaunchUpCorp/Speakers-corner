/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sc-blue": "#0077c0",
        "sc-dark-blue": "#00629e",
      },
      keyframes: {
        xTranslation: {
          "0%": {
            width: "3.375rem",
          },
          "100%": {
            width: "100%",
          },
        },
        yTranslation: {
          "0%": {
            height: "3.375rem",
          },
          "100%": {
            height: "50vh",
          },
        },
      },
      animation: {
        xTranslation: "xTranslation 7.57s linear infinite alternate",
        yTranslation: "yTranslation 5.75s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
