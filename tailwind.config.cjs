/** @type {import('tailwindcss').Config} */

const tailwindcss = require('tailwindcss');
const nesting = require('@tailwindcss/nesting')(require('postcss-nesting'));
const autoprefixer = require('autoprefixer');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, nesting, autoprefixer],

}

