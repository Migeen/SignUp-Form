/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000E0',
        red: {
          50: '#fff1f0',  // Lightest shade of black (near white)
          100: '#ffccc7',
          200: '#ffa39e',
          300: '#ff7875',
          400: '#ff4d4f',
          500: '#f5222d',
          600: '#cf1322',
          700: '#a8071a',
          800: '#820014', // Darker grayish-black
          900: '#5c0011', // Darkest shade of black
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #c33764, #1d2671)',
      },
      width:{
        'fixed': '340px',
      },
      height:{
        'fixed': '236px'
      }
    },
  },
  plugins: [],
}

