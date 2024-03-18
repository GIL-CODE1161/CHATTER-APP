module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 400: "#898989", "100_02": "#d0d0d0" },
        gray: { 400: "#b0b0b0", 700: "#626262", 800: "#3b3b3b", 900: "#141414", "900_02": "#212529" },
        black: { "900_01": "#101010", "900_03": "#000000", "900_8c": "#0000008c" },
        white: { A700: "#ffffff" },
        deep_purple: { 100: "#d6d0f7", 500: "#543de0", A700: "#3217da", "500_7f": "#543de07f" },
        deep_orange: { A400: "#ff1300" },
        yellow: { "100_7f": "#ffedcc7f" },
      },
      boxShadow: { xs: "0px 0px  1px 0px #21252914" },
      fontFamily: { dmsans: "DM Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
