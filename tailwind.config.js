const { main } = require('framer-motion/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '700px': '700px',
      },
      minWidth: {
        '300px': '300px',
      },
      rotate: {
        2: '2deg',
      },
      scale: {
        110: '1.1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: {
          main: '#111111',
          dark: '#080808',
          chip: '#232323',
        },
        text: {
          main: '#ebecf3',
        },
        accent: '#12ff9d',
      },
    },
    keyframes: {
      'fade-down': {
        '0%': { opacity: 1, transform: 'translateY(0)' },
        '100%': { opacity: 0, transform: 'translateY(20px)' },
      },
    },
    animation: {
      'fade-down': 'fade-down 0.5s ease-in-out',
    },
  },
  plugins: [require('tailwindcss-animated')],
};
