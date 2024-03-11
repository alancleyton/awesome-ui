/** @type {import('tailwindcss').Config} */

import { defaultTheme } from './src';

const tailwindcss = require('tailwindcss');
const nesting = require('@tailwindcss/nesting')(require('postcss-nesting'));
const autoprefixer = require('autoprefixer');

module.exports = {
  prefix: 'a-',
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: defaultTheme,
  plugins: [tailwindcss, nesting, autoprefixer],
};
