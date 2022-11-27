module.exports = {
  content: ["./src/**/*.{html,js,svelte,md}"],
  theme: {
    extend: {
      colors: {
        "darkest-gray": "#222222",
        "dark-gray": "#292929",
        "medium-gray": "#272727",
        gray: "#808080",
        "light-gray": "#c1c1c1"
      },
      fontFamily: {
        montserrat: ["Monserrat"],
        dyslexic: ["OpenDyslexic"],
        monospace: ["Inconsolata"]
      }
    }
  },
  plugins: []
};
