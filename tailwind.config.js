/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#4285F4",
          2: "#E94235",
          3: "#34A853",
          4: "#FABB05",
          bg: "#F6F9FF",
        },
      },
    },
  },
  plugins: [],
};
