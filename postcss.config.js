const tailwind = require('tailwindcss')

module.exports = () => ({
  plugins: [tailwind('./src/config/tailwind.js')],
})
