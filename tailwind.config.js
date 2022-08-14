/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prussian-blue": "#0E273C",
        "spanish-violet": "#4A306D",
        "pearly-purple": "#A167A5",
        "thistle-brown": "#D3BCCC",
        "pale-purple": "#E8D7F1",
      },
    },
  },
  plugins: [],
}
