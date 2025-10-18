/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        "purple-primary": "#800080",
        "purple-light": "#9D4EDD",
        "purple-dark": "#5A189A",
        "purple-50": "#F3E8FF",
        "purple-100": "#E9D5FF",
        "purple-200": "#C4B5FD",
      },
    },
  },
  plugins: [],
};
