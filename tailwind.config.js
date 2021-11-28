module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-color": "#D0D6F9",
      },
      backgroundImage: {
        mobile: "url('/static/assets/home/background-home-mobile.jpg')",
        tablet: "url('/static/assets/home/background-home-tablet.jpg')",
        desktop: "url('/static/assets/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        "barlow-condensed": ['"Barlow Condensed"', "serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "serif"],
      },
      fontSize: {
        "above-base": "0.9375rem",
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
