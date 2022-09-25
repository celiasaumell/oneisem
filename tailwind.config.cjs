/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: { max: "640px" },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "dark-teal": "#1E3137",
        "light-lilac": "#CACFE1",
        "off-white": "#F1F4FF",
      },
      backgroundImage: {
        "business-photo": "url('/jess-bailey-q10VITrVYUM-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
