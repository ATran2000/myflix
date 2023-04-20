const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('http://localhost:3000/images/hero.gif')",
      },
      fontFamily: {
        mono: ['var(--font-dynapuff)', ...fontFamily.mono],
      }
    },
  },
  plugins: [],
}