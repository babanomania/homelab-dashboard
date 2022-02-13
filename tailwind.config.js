const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extends: {
      colors: {
        accent: "#3ab7bf",
      },
    },
  },
  plugins: [],
};
