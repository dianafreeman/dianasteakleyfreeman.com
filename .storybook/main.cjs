const preprocess = require("svelte-preprocess");
const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");

function doesNotDupeStorybookSveltePlugins(p) {
  return !p.name.startsWith("vite-plugin-svelte") || p.name === "vite-plugin-svelte-kit";
}

module.exports = {
  stories: ["../src/**/*.stories.svelte"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
  framework: "@storybook/svelte",
  core: {
    builder: "@storybook/builder-vite"
  },
  svelteOptions: {
    preprocess: import("../svelte.config.js").preprocess
  },
  features: {
    storyStoreV7: false
  },
  async viteFinal(config) {
    const { config: svelteKitConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.js")
    );

    // Remove Svelte plugins that would duplicate those added by the Storybook plugin
    const plugins = svelteKitConfig.plugins.flat(1).filter(doesNotDupeStorybookSveltePlugins);

    // const newConfig = {
    //   ...config,
    //   resolve: {
    //     alias: [
    //       ...config.resolve.alias,
    //       {
    //         find: "$app",
    //         replacement: path.resolve("./.storybook/lib/app")
    //       },
    //     ]
    //   }
    // }
    console.log(svelteKitConfig);
    const resolve = {
      alias: [
        {
          find: "$app",
          replacement: path.resolve("./.storybook/lib/app")
        }
      ]
    };
    // merge the config files
    return mergeConfig(config, {
      ...svelteKitConfig,
      plugins,
      resolve
    });
  }
};
