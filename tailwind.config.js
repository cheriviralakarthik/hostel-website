/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "340px", // custom breakpoint for screens smaller than 640px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
