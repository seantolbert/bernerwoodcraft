/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wood-pattern": "url('assets/images/woodbackground.webp')",
      },
      fontFamily: {
        "montserrat-bold": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
