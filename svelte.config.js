import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import mdsvexConfig from "./mdsvex.config.js";
import path from "path";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    enableSourcemap: true
  },
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
    alias: {
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $content: path.resolve("./src/content"),
      $fonts: path.resolve("./src/fonts")
    }
  },
  preprocess: [preprocess({ sourceMap: true }), mdsvex(mdsvexConfig)]
};

export default config;
