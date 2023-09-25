/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green50: "#93c854",
        white100: "#fff",
        "icon-icon-lower-emphasis": "#8695a1",
        "artboard-border-blue": "#4199d5",
        lightgreen: "#abd57b",
        palegoldenrod: "#c4e1a2",
        "text-text-green-light": "#97cc56",
        darkslategray: "rgba(19, 63, 93, 0.8)",
        "text-text-secondary": "#718c9e",
        "text-text-primary": "#133f5d",
        "text-text-red": "#e35273",
        "artboard-surface-default": "#f8fbfe",
        grey30: "#e0e4e7",
        darkgrey30: "#9aa6b0",
        "artboard-border": "#eaedef",
        blue10: "#f7fbfd",
        blue50: "#4195d5",
        "shades-of-blue-blue-high": "#c2def2",
        "grey-45": "#d6dbe0",
        gainsboro: "#d4dade",
        whitesmoke: {
          "100": "#f8f9fa",
          "200": "#eceff1",
        },
        "shades-of-blue-blue-low": "#e8f3fa",
        "darkgrey-50": "#3c5467",
        "blue-20": "#e8f2fa",
        gray: "rgba(255, 255, 255, 0.6)",
        "text-text-tertiary": "#c2cdd5",
        lightsteelblue: "#95c1df",
      },
      spacing: {},
      fontFamily: {
        "caption-2": "Lato",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      smi: "13px",
      mini: "15px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      "18xl": "37px",
      xl: "20px",
      "7xl": "26px",
      "29xl": "48px",
      "3xl": "22px",
      "21xl": "40px",
      "37xl": "56px",
      "11xl": "30px",
      "12xl": "31px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1100px",
      },
      sm: {
        max: "600px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
