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
        'anya' : "url('https://alvins-myflix.vercel.app/images/anya.gif')",
      },
      fontFamily: {
        mono: ['var(--font-dynapuff)', ...fontFamily.mono],
      }
    },
  },
  plugins: [],
}