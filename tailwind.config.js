const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(var(--white))",
      black: "hsl(var(--black))",
      purple: "hsl(var(--purple))",
      red: "hsl(var(--red))",
      green: "hsl(var(--green))",
      indigo: {
        light: "hsl(var(--indigo-light))",
        dark: "hsl(var(--indigo-dark))",
      },
      gray: {
        light: {
          1: "hsl(var(--gray-light-1))",
          2: "hsl(var(--gray-light-2))",
          3: "hsl(var(--gray-light-3))",
          4: "hsl(var(--gray-light-4))",
        },
        dark: {
          1: "hsl(var(--gray-dark-1))",
          2: "hsl(var(--gray-dark-2))",
          3: "hsl(var(--gray-dark-3))",
          4: "hsl(var(--gray-dark-4))",
          5: "hsl(var(--gray-dark-5))",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    extend: {
      animation: {
        "grow-horizontal":
          "grow-horizontal 1.3s cubic-bezier(0.9, 0, 0.5, 0.9) 0.8s forwards",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        "grow-horizontal": {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "98%",
          },
        },
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
