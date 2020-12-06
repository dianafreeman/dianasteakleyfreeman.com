const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@config': path.resolve(__dirname, '../src/config'),
    };

    // Add Webpack rules for scss modules
    // ========================================================

    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]',
            importLoaders: 2,
            camelCase: true,
            sourceMap: false, // turned off as causes delay
          },
        },
        'sass-loader',
      ],
      include: /\.scss$/,
    });

    // Add Webpack rules for svg
    // ========================================================

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: ['@svgr/webpack'],
      exclude: /fonts\/.*\.svg/,
      include: path.resolve(__dirname, '../'),
    });

    // // Adds Support for Gatsby
    // // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    // config.module.rules[0].use[0].loader = require.resolve('babel-loader');
    // // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
      // use @babel/plugin-proposal-optional-chaining because its great
      require.resolve('@babel/plugin-proposal-optional-chaining'),
    ];
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];
    // Return the altered config

    return config;
  },
};
