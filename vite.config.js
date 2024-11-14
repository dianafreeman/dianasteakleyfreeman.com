import { defineConfig } from 'vitest/config';

import { sveltekit } from "@sveltejs/kit/vite";


export default defineConfig({
  plugins: [ sveltekit()],
  assetsInclude: ['**/*.md'],
  css: {
    preprocessorOptions: {
      tailwindcss: { config: './src/tailwind.config.js' }, // New path for Tailwind config
    },
  },
});

// export default config;
// import { defineConfig } from 'vitest/config';
// import { sveltekit } from '@sveltejs/kit/vite';

// export default defineConfig({
// 	plugins: [sveltekit()],

// 	test: {
// 		include: ['src/**/*.{test,spec}.{js,ts}']
// 	}
// });
