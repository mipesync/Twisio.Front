/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'light': '0px 0px 10px rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
  },
  plugins: [],
}}