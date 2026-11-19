/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#140F0D',
          900: '#191412',
          800: '#2D201A',
          700: '#43342D',
          600: '#6B584E',
          500: '#8A766C',
          400: '#AC9A90',
          300: '#C5B7AE',
          200: '#D9CEC7',
        },
        earth: {
          bronze: '#866452',
          clay: '#C78460',
          sand: '#D4A373',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(-24px, 18px, 0) scale(1.06)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 20s ease-in-out infinite reverse',
      },
      boxShadow: {
        serene: '0 10px 30px rgba(45, 32, 26, 0.04)',
        premium: '0 20px 45px rgba(45, 32, 26, 0.07)',
        velvet: '0 25px 60px rgba(20, 15, 13, 0.35)',
      },
    },
  },
  plugins: [],
};
