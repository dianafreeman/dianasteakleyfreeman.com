import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      tailwindcss: { config: './src/tailwind.config.js' }, // New path for Tailwind config
    },
  },
};

export default config;
