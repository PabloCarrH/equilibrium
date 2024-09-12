/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: "#737373",
          200: "#8C8C8C",
          300: "#BFBFBF",
          400: "#F2F2F2",
          500: "#D9D9D9"
        }
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};