import path from 'path'
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          $lib: path.resolve("./src/lib"),
          $stores: path.resolve("./src/stores")
        }
      }
    }
  }
};

export default config;