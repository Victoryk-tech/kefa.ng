/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "san-serif"],
      inter: ["Inter", "sans-serif"],
    },
    // backgroundImage: {
    //   login: "url('../../assets/login.png')",
    // },

    extend: {},
  },
  plugins: [],
};
