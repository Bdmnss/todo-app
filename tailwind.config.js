/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-bg-img-dekstop": "url('/images/bg-desktop-dark.jpg')",
        "dark-bg-img-mobile": "url('/images/bg-mobile-dark.jpg')",
        "light-bg-img-dekstop": "url('/images/bg-desktop-light.jpg')",
        "light-bg-img-mobile": "url('/images/bg-mobile-light.jpg')",
      },
      boxShadow: {
        "down-shadow": "rgba(0, 0, 0, 0.2) 0px 40px 40px -7px",
      },
    },
  },
  plugins: [],
};
