/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black50: "rgba(0,0,0,.5)",
        'whisperGray': '#F5F5F6'
      }
    },
  },
  plugins: [],
}

