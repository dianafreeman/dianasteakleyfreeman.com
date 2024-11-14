import { sveltekit } from "@sveltejs/kit/vite";
import VitePluginMarkdown from "vite-plugin-md";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), VitePluginMarkdown()],
  assetsInclude: ['**/*.md'],
  css: {
    preprocessorOptions: {
      tailwindcss: { config: './src/tailwind.config.js' }, // New path for Tailwind config
    },
  },
};

export default config;
