/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AmazonEmberBold: ["AmazonEmber-bold"],
        AmazonEmberMedium: ["AmazonEmber-medium"],
        AmazonEmberNormal: ["AmazonEmber-normal"],
      },
      fontSize: {
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "14px": "14px",
      },
      colors: {
        primary: "#131A22",
        secondary: "#232F3E",
        thirdColor: "#37475A",
        white: "#ffffff",
        "gray-400": "#999",
        "gray-300": "#DDD",
        "gray-350": "#3a4553",
        "hover-btn": "#485769",
        "link-primary": "#007185",
      },
    },
  },
  plugins: [],
};
