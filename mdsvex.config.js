import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".md", ".mdx", ".svx"],
  smartypants: {
    dashes: "oldschool"
  },
  remarkPlugins: [],
  rehypePlugins: []
});

export default config;
