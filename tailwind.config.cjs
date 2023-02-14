module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e000f",
        secondary: "#ee5aba",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPink: "rgba(137,9,151,0.1)",
        golden: "#F6A847",
      },
      fontFamily: {
        glory: ["Glory", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};