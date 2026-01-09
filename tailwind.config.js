/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63', // Pink color matching the brand vibe
        secondary: '#FCE4EC', // Light pink
      }
    },
  },
  plugins: [],
}