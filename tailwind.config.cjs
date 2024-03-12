/** @type {import('tailwindcss').Config} */

import { defaultTheme } from './src';

const tailwindcss = require('tailwindcss');
const nesting = require('@tailwindcss/nesting')(require('postcss-nesting'));
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
    }
  },
  plugins: [tailwindcss, nesting, autoprefixer],
};
