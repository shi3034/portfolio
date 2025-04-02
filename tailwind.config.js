/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hand: ['Architects Daughter', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        paper: 'var(--paper-color)',
        ink: 'var(--ink-color)',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
}
