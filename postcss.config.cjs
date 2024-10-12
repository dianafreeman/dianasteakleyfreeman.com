/* eslint-disable global-require */
module.exports = () => ({
  plugins: [
    require("tailwindcss")({ config: './src/tailwind.config.js' }), 
    require("autoprefixer")
  ]
});
