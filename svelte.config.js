import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import path from "path";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    vite: {
      resolve: {
        alias: {
          $routes: path.resolve("./src/routes"),
          $stores: path.resolve("./src/stores"),
          $content: path.resolve("./src/content"),
          $fonts: path.resolve("./src/fonts")
        }
      }
    }
  },
  preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
