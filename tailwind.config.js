/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e8e7ec",
          "200": "#e6e7ec",
          "300": "#d4d9e1",
        },
        whitesmoke: {
          "100": "#f6f8fa",
          "200": "#f6f6f6",
          "300": "#f5f6f7",
        },
        gray: {
          "100": "#23283b",
          "200": "#0c0d11",
          "300": "rgba(255, 255, 255, 0.36)",
          "400": "rgba(0, 0, 0, 0.01)",
          "500": "rgba(0, 0, 0, 0.11)",
        },
        darkgray: "#a2a3a7",
        "text-primary-light": "#485066",
        gold: "#ffc700",
        black: "#000",
        lightgray: {
          "100": "#d6d6d6",
          "200": "#d1d1d1",
        },
        darkorange: {
          "100": "#ff8e22",
          "200": "#ff9800",
          "300": "rgba(255, 152, 0, 0.16)",
          "400": "rgba(255, 152, 0, 0.04)",
        },
        aliceblue: "#e6f0ff",
        dodgerblue: "#2288ff",
        lavenderblush: "#fdedf0",
        crimson: "#ea3a59",
        linen: "#fff2e6",
        yellowgreen: "#62af00",
        orange: "#ffa117",
        "text-primary": "#0a1b39",
        silver: "rgba(194, 194, 194, 0.04)",
        lightslategray: "#83899f",
        chocolate: "rgba(204, 102, 0, 0.16)",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "19xl": "38px",
        "42xl": "61px",
        "34xl": "53px",
        "40xl": "59px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      sm: "0.875rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      mini: "0.938rem",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1200: {
        raw: "screen and (max-width: 1200px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
