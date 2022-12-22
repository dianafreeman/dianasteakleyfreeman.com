module.exports = {
  content: ["./src/**/*.{html,js,svelte,md}"],
  theme: {
    extend: {
      colors: {
        "darkest-gray": "#181818",
        "dark-gray": "#222222",
        "gray": "#474747",
        "light-gray": "#808080",
        "lightest-gray": "#c1c1c1"
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
