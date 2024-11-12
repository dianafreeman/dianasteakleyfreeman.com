import preprocess from "svelte-preprocess";
import path from "path";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    enableSourcemap: true
  },
  extensions: [".svelte"],
  kit: {
    adapter: adapter(),
    alias: {
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $content: path.resolve("./src/content"),
      $fonts: path.resolve("./src/fonts"),
      $tests: path.resolve("./src/tests")
    }
  },
  preprocess: [preprocess({ sourceMap: true }),]
};

export default config;
