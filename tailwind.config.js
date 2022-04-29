const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      prussblue: "#1D3557",
      cblue: "#457B9D",
      pblue: "#A8DADC",
      honeydew: "#F1FAEE",
      ired: "#E63946",
      white: "#ffffff",
      yellow: "#F1C644",
      gray: colors.slate,
      green: colors.green,
      blueGray: colors.blueGray,
      status: {
        100: "#fec400",
        200: "#27AE60",
        300: "#25A259",
        400: "#229652",
        500: "#1F894B",
        600: "#98E8B9",
        700: "#f12b2c",
      },
    },
    extend: {
      zIndex: {
        negative: "-1",
      },
    },
  },
  plugins: [],
};
