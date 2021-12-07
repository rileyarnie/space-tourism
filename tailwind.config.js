module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "thin-line": "0.0625rem",
        4.5: "1.125rem",
      },
      colors: {
        "text-color": "#D0D6F9",
        "number-color": "#0B0D17",
        "divider-color": "#383B4B",
        "nav-background": "rgba(255, 255, 255, 0.04)",
      },
      backgroundImage: {
        mobile: "url('/static/assets/home/background-home-mobile.jpg')",
        tablet: "url('/static/assets/home/background-home-tablet.jpg')",
        desktop: "url('/static/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/static/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/static/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/static/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/static/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/static/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop":
          "url('/static/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/static/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/static/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/static/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        "barlow-condensed": ['"Barlow Condensed"', "serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "serif"],
      },
      fontSize: {
        "above-base": "0.9375rem",
        "2.5xl": "1.75rem",
        "5.5xl": "3.5rem",
        "7.5xl": "5rem",
      },
      lineHeight: {
        long: "6.25rem",
      },
      letterSpacing: {
        "even-wider": "0.16875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
