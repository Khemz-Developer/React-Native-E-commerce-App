/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./src/app/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}","./src/app/tabs/**/*.{js,jsx,ts,tsx}",  "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        rmono: ["Roboto Mono", "monospace"],
      }
    },
  },
  plugins: [],
}

