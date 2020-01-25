const tailwind = require('tailwindcss')

module.exports = () => ({
  plugins: [tailwind('/src/config/theme/tailwind')],
})
