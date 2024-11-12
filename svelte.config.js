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
    adapter: adapter({ strict: false}),
    prerender: {
      entries: [
        "/",
        "/blog",
        "/resources",
        "/contact",
        "/feedback",
        "/privacy-policy",
        "/projects",
        "/projects/ahtii",
        "/projects/rafiki-to-the-rescue",
        "/projects/steakleyfreeman-et-al-agression-self-awareness-deception",
        "/projects?subcategory=art-and-design",
        "/projects?subcategory=science",
        "/projects/make-them-hear-you",
        "/projects/mood-and-false-memory",
        "/projects/mood-and-false-memory",
        "/blog/digital-self-care",
        "/blog/eliza-therapeutic-ai",
        "/blog/user-misdirection"
      ]
    },
    alias: {
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $content: path.resolve("./src/content"),
      $fonts: path.resolve("./src/fonts"),
      $tests: path.resolve("./src/tests")
    }
  },
  preprocess: [preprocess({ sourceMap: true })]
};

export default config;
