/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-l": "#dfe9f3",
        "gradient-r": "#fff",
      },
    },
    plugins: [],
  },
};
