/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FE0B6",
        secondary: "#246865",
        dark: "#05132C",
        light: "#4FE0B6",
        accordion: "#16395E",
      },
      maxWidth: {
        container : '1245px',
        container2 : '1440px',
      }
    },
  },
  plugins: [],
};
