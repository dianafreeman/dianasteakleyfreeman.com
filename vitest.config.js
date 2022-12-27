
import path from 'path'
import { defineConfig, loadConfigFromFile } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: { 
      "$lib": path.resolve(__dirname, "./src/lib")
    }
  }
})