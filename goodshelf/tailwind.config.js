/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Concert: ["Concert One", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Fredoka: ["Fredoka", "sans-serif"],
      }
    },
  },
  plugins: [],
}
