/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        'header': {
          light: '#f7f7f7',
          DEFAULT: '#24292f',
          dark: '#24292f',
        },
      },
    },
  },
  plugins: [],
}

