/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        "brand-main": "#d3d649",
        "brand-navy": "#1e0e8a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
