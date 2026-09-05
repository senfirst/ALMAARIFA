/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#062419',
          900: '#0A3323',
          800: '#0E4530',
          700: '#13593F',
          600: '#1B7350',
          500: '#238C63',
        },
        gold: {
          600: '#B8862B',
          500: '#CDA043',
          400: '#DFB65E',
          300: '#EACB84',
        },
        sand: {
          50: '#FAF8F3',
          100: '#F4F0E6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      backgroundImage: {
        'geo-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='84' viewBox='0 0 84 84'%3E%3Cg fill='none' stroke='%23CDA043' stroke-opacity='0.16' stroke-width='1'%3E%3Cpath d='M42 0 L84 42 L42 84 L0 42 Z'/%3E%3Ccircle cx='42' cy='42' r='20'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
