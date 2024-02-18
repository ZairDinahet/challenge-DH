/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'yt': '#FF0000',
        'ig': '#E4405F',
        'fb': '#1877F2',
        'x': '#1DA1F2',
        'li': '#0077B5',
      }
    },
  },
  plugins: [],
}

