const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");

module.exports = {
  core: {
    builder: "@storybook/builder-vite"
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: import("../svelte.config.js").preprocess
  },
  async viteFinal(config, { configType }) {
    const sKitConfig = await loadConfigFromFile(
      configType,
      path.resolve(__dirname, "../svelte.config.js")
    );
    // TODO: not working
    const { alias } = sKitConfig.config.kit.vite.resolve;

    return mergeConfig(config, {
      resolve: {
        alias
      }
    });
  }
};
