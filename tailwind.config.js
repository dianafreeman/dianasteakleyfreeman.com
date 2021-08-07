const { gray, white, black } = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray,
      white,
      black,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
