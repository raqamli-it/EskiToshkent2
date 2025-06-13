/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "500px" },
    },
  },
  plugins: [],
};
