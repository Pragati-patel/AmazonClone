/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      '12px':'12px',
      '14px':'14px',


    },
    extend: {
      fontFamily: {
        AmazonEmberBold: ["AmazonEmber-bold"],
        AmazonEmberMedium: ["AmazonEmber-medium"],
        AmazonEmberNormal: ["AmazonEmber-normal"],
      },
    },
  },
  plugins: [],
}