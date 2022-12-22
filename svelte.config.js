import { mdsvex } from "mdsvex";
import image from "svelte-image";
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
    trailingSlash: "never",
    adapter: adapter(),
    alias: {
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $content: path.resolve("./src/content"),
      $fonts: path.resolve("./src/fonts")
    }
  },
  preprocess: [
    preprocess({ sourceMap: true }),
    mdsvex(mdsvexConfig),
    image({
      sizes: [200, 400, 600, 800],
      processFolders: ["images", "images/rafiki-to-the-rescue"],
      outputDir: "preprocessed"
    })
  ]
};

export default config;
