/** @type {import('tailwindcss').Config} */
const Nth = require("tailwind-nth-child");
const nth3 = new Nth("3", "3");
const nth7 = new Nth("7", "7");
const nth2 = new Nth("2", "-n+2");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: ["nth-child-7", "nth-child-3", "nth-child-2"],
      fontFamily: {
        sans: ["Sharp Grotesk"],
        mono: ["Monosten A"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [nth2.nthChild(), nth3.nthChild(), nth7.nthChild()],
};
