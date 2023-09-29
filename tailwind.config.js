/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        blue : "#B6FBFF",
        gray : "#B3B3B3",
        black : "#000000",
        white : "#FFFFFF",
        background: "#1A1A1A",
        border : "#303030"
      },
    },
    extend: {
      container: {
        screens: {
          'xl': '1200px',
        }
      },
    },
  },
  plugins: [],
}

