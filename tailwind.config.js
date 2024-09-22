const { main } = require('framer-motion/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: {
          main: '#111111',
          dark: '#080808',
        },
        text: {
          main: '#ebecf3',
        },
        accent: '#12ff9d',
      },
    },
  },
  plugins: [],
};
