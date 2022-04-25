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
    },
    extend: {
      zIndex: {
        negative: "-1",
      },
    },
  },
  plugins: [],
};
