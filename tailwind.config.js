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
        textLight:"#555",
        white: "#ffffff",
        'yellow-250':'#f3a847',
        "gray-400": "#999",
        "gray-300": "#DDD",
        "gray-350": "#3a4553",
        "gray-450":"#d5d9d9",
        'gray-850':'#767676',
        "hover-btn": "#485769",
        "link-primary": "#007185",
        "link-secondary": "#0066c0",
        "black-text":"#0F1111",
      },
    },
  },
  plugins: [],
};
