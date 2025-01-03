import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors: {
        "dark-gray": "#222222",
        black: "#090A0B",
        navy: "#3C6997",
        "sky-blue":"#5ADBFF",
        "yellow": "#FFDD4A",
        "orange": "#FE9000"
      },
      fontFamily: {
        code: ["VT323"], 
        montserrat: ["Monserrat"],
        dyslexic: ["OpenDyslexic"],
        monospace: ["Inconsolata"],
        base: ["Karla"]
      }
    }
	},

	plugins: [forms, aspectRatio]
};
