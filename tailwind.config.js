/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: "#F2F2F2",
          200: "#7A8C51",
          300: "#022601",
          400: "#034001",
          500: "#227345"
        }
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'lobster': ["Lobster", "cursive"],
      }
    },
  },
  plugins: [],
};