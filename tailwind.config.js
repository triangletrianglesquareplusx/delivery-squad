/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        regalBlue: "#9672FF",
        primaryRed: "#FD6D61",
      },
    },
  },
  plugins: [],
};
