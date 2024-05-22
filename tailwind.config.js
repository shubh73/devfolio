const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#8b31ff",
      red: "#cf0000",
      green: "#00ac56",
      indigo: {
        light: "#9f55ff",
        dark: "#7000ff",
      },
      gray: {
        light: {
          1: "#f0f0f0",
          2: "#dbdbdb",
          3: "#aaaaaa",
          4: "#8a8a8a",
        },
        dark: {
          1: "#323133",
          2: "#242225",
          3: "#1e1b20",
          4: "#1a171e",
          5: "#120e16",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
