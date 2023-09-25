/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-text-tertiary": "#c2cdd5",
        white100: "#fff",
        green50: "#93c854",
        gray: "rgba(255, 255, 255, 0.6)",
        "text-text-primary": "#133f5d",
        "artboard-border": "#eaedef",
        blue10: "#f7fbfd",
        whitesmoke: "#eceff1",
        blue50: "#4195d5",
        "shades-of-blue-blue-low": "#e8f3fa",
        "shades-of-blue-blue-high": "#c2def2",
        lightsteelblue: "#95c1df",
        "blue-20": "#e8f2fa",
        "text-text-blue": "#4199d5",
      },
      spacing: {},
      fontFamily: {
        "heading-heading-large": "Lato",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "12xl": "31px",
      sm: "14px",
      lg: "18px",
      "18xl": "37px",
      xl: "20px",
      "7xl": "26px",
      "29xl": "48px",
      "3xl": "22px",
      "5xl": "24px",
      xs: "12px",
      smi: "13px",
      "21xl": "40px",
      "37xl": "56px",
      "11xl": "30px",
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
