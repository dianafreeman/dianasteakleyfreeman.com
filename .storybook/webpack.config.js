const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  /*
   `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
   You can change the configuration based on that. 

   'PRODUCTION' is used when building the static version of storybook.
  */

  // SASS webpack in storybook
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  // MDX (JSX in markdown) in storybook
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-transform-react-jsx"]
        }
      },
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  });

  // Return the altered config to storybook
  return config;
};
