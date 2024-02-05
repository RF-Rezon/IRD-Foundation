/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'cumtomWhite': '#F7F8FA',
        'cumtomBlack': '#393939', // base color
        'cumtomGreen': '#1FA45B',
        'cumtomWhiteNavBtn': '#E8F0F5',
        'cumtomGray': '#7E7E7E',
        'cumtomIcon': '#868686',
        'cumtomSearchGray':'#F3F4F6',
        'cumtomBg':'#eaeef3',
      },
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
};
