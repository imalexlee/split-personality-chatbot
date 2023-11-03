/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        cream: "#ECE3CE",
        slate: "#7B8FA1",
      },
      colors: {
        darkTextPrimary: "#41413E",
        darkTextSecondary: "#82827C",
        forestGreen: "#739072",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
