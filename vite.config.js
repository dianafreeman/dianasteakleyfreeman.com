import { defineConfig } from 'vitest/config';

import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [ sveltekit()],
  assetsInclude: ['**/*.md'],
  css: {
    preprocessorOptions: {
      tailwindcss: { config: './tailwind.config.js' }, // New path for Tailwind config
    },
  },
  server: {
    fs: {
      allow: ["."]
    }
  }
});
