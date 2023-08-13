/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|svelte|ts|tsx)", '!../node_modules/**'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf" 
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
