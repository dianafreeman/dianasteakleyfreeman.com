import path from "path";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $lib: path.resolve("./src/lib"),
          $stores: path.resolve("./src/stores"),
          $content: path.resolve("./src/content"),
          $fonts: path.resolve("./src/fonts")
        }
      }
    }
  }
};

export default config;
