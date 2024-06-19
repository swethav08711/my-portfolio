/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", "[class~='dark']"],
  theme: {
    extend: {},
    fontFamily: {
      indie: ["Indie Flower"],
      serif: ["DM Serif Display", "serif"],
      elite: ["Special Elite"],
      rubik: ["Rubik"],
    },
  },
  plugins: [],
};
