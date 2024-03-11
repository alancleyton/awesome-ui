const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  circle: '50%',
};

const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
  gray: {
    950: '#0c0c0c',
    900: '#3a3b3c',
    800: '#4e4f50',
    700: '#616263',
    600: '#757677',
    500: '#89898a',
    400: '#9d9d9e',
    300: '#b0b1b1',
    200: '#c4c4c5',
    100: '#d8d8d8',
    50: '#ebebec',
  },
  blue: {
    950: '#0f5499',
    900: '#198cff',
    800: '#3098ff',
    700: '#47a3ff',
    600: '#5eafff',
    500: '#75baff',
    400: '#8cc6ff',
    300: '#a3d1ff',
    200: '#baddff',
    100: '#d1e8ff',
    50: '#e8f4ff',
  },
  yellow: {
    950: '#e6c200',
    900: '#ffd700',
    800: '#ffdb1a',
    700: '#ffdf33',
    600: '#ffe34d',
    500: '#ffe766',
    400: '#ffeb80',
    300: '#ffef99',
    200: '#fff3b3',
    100: '#fff7cc',
    50: '#fffbe6',
  },
  red: {
    950: '#cc0600',
    900: '#ff0800',
    800: '#ff211a',
    700: '#ff3933',
    600: '#ff524d',
    500: '#ff6b66',
    400: '#ff8480',
    300: '#ff9c99',
    200: '#ffb5b3',
    100: '#ffcecc',
    50: '#ffe6e6',
  },
  green: {
    950: '#02732c',
    900: '#03c04a',
    800: '#1cc65c',
    700: '#35cd6e',
    600: '#4fd380',
    500: '#68d992',
    400: '#81e0a5',
    300: '#9ae6b7',
    200: '#b3ecc9',
    100: '#cdf2db',
    50: '#e6f9ed',
  },
};

const flex = {
  1: '1 1 0%',
  2: '2 2 0%',
  3: '3 3 0%',
};

const fontFamily = {
  roboto: ['Roboto', 'sans-serif'],
  libre: ['Libre Franklin', 'sans-serif'],
  oswald: ['Oswald', 'sans-serif'],
};

const fontSize = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.5rem',
  '2xl': '1.75rem',
  '3xl': '2.25rem',
  '4xl': '3rem',
  '5xl': '3.75rem',
  '6xl': '4.5rem',
  '7xl': '6rem',
  '8xl': '8rem',
  '9xl': '10rem',
};

const fontWeight = {
  thin: 100,
  'extra-light': 200,
  light: 300,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900,
};

const lineHeight = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.5rem',
  body: 1.5,
  heading: 1.25,
};

const screens = {
  'mobile-sm': '360px',
  'mobile-md': '480px',
  'mobile-lg': '640px',
  'tablet-sm': '768px',
  'tablet-md': '992px',
  'tablet-lg': '1024px',
  'desktop-sm': '1200px',
  'desktop-md': '1300px',
  'desktop-lg': '1500px',
};

const spacing = {
  hr: '1px',
  0: '0px',
  1: '2px',
  2: '4px',
  3: '8px',
  4: '12px',
  5: '16px',
  6: '24px',
  7: '32px',
  8: '40px',
  9: '48px',
  10: '64px',
  11: '80px',
  12: '96px',
  13: '160px',
  14: '280px',
  15: '320px',
};

const defaultTheme = {
  borderRadius,
  colors,
  flex,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  screens,
  spacing,
};

export default defaultTheme;
