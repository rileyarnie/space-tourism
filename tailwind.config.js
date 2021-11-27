module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/static/assets/home/background-home-mobile.jpg')",
        tablet: "url('/static/assets/home/background-home-tablet.jpg')",
        desktop: "url('/static/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
