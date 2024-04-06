/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors:{
        "background-1":"#FFFFFF",
        "background-2":"#FBFBFB",
        "service-bg":"#F5F3FE",
      }
    },
  },
  plugins: [],
}