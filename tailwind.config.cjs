module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': "#0c0c0c",
        'medium-gray': "#272727",
      },
      fontFamily: {
        montserrat: ["Monserrat"],
        dyslexic: ["OpenDyslexic"],
        sharetechmono: ["ShareTechMono"],
        newsreader: ["Newsreader"]
      }
    }
  },
  plugins: []
};
