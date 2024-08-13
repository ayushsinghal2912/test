/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#838383",
          "200": "#808080",
          "300": "#292929",
          "400": "#282828",
          "500": "#272727",
          "600": "#262626",
          "700": "#252525",
          "800": "#242424",
          "900": "#051c34",
        },
        lightgray: "#d5d5d5",
        dimgray: {
          "100": "#6d6d6d",
          "200": "#595959",
          "300": "#575757",
        },
        white: "#fff",
        darkslategray: {
          "100": "#484848",
          "200": "#3e3e3e",
          "300": "#383838",
          "400": "#333",
        },
        dodgerblue: "#1572d3",
        ghostwhite: "#f7fbff",
        darkgray: {
          "100": "#acacac",
          "200": "#9c9c9c",
          "300": "#959595",
        },
        black: "#000",
        gainsboro: "#e0e0e0",
        aliceblue: "#ecf5ff",
        silver: "#b6b6b6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "2xs-1": "10.1px",
        "12xs-8": "0.8px",
        "12xs-5": "0.5px",
        "5xs-2": "7.2px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "45xl": "64px",
      "4xl": "23px",
      "11xl": "30px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
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
