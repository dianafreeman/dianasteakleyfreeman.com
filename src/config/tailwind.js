/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.
*/

const defaultConfig = require('tailwindcss/defaultConfig')();


const brandColors = {
  adobe: '#fbb034',
  twitter: '#1da1f2',
  github: '#333',
  javascript: '#f7df1e',
  node: '#215732',
  grunt: '#fba919',
  wordpress: '#21759b',
  gatsby: '#b300c9',
  sass: '#E35BE5',
  medium: '#00ab6c',
};
const colors = {
  lightest: '',
  darkest: '',
  primary: '',
};

module.exports = {
  ...defaultConfig,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        ...brandColors,
        ...colors,
      },
    },
  },
};
