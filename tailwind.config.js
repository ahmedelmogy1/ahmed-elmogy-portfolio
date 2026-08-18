/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        accent: "#D7E2EA",
        "muted-gray": "#646973",
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
