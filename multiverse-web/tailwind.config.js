/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sharp Grotesk'],
        /*  Sharp_Grotesk_Book20: ['Sharp_Grotesk_Book20'],
        Sharp_Grotesk_Light20: ['Sharp_Grotesk_Light20'],
        Sharp_Grotesk_Medium20: ['Sharp_Grotesk_Medium20'],
        Sharp_Grotesk_SemiBold25: ['Sharp_Grotesk_SemiBold25'],
        Sharp_Grotesk_Light25: ['Sharp_Grotesk_Light25'],
        Sharp_Grotesk_Book25: [' Sharp_Grotesk_Book25'],
        Sharp_Grotesk_Medium25: ['Sharp_Grotesk_Medium25'], */
      },
    },
  },
  plugins: [],
}
