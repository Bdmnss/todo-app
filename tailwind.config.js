/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-bg-img-dekstop": "/images/bg-desktop-dark.jpg",
        "dark-bg-img-mobile": "/images/bg-mobile-dark.jpg",
        "light-bg-img-dekstop": "/images/bg-desktop-light.jpg",
        "light-bg-img-mobile": "public/images/bg-mobile-light.jpg",
      },
    },
  },
  plugins: [],
};
