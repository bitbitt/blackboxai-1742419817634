/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scale-102': {
          transform: 'scale(1.02)',
        },
        '.scale-98': {
          transform: 'scale(0.98)',
        },
      });
    },
  ],
  variants: {
    extend: {
      ringColor: ['focus'],
      ringWidth: ['focus'],
      ringOffsetWidth: ['focus'],
    },
  },
  corePlugins: {
    ringColor: true,
    ringWidth: true,
    ringOffsetWidth: true,
  },
}