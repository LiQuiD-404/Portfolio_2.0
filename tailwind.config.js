/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 8s linear infinite',
        marquee2: 'marquee2 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}