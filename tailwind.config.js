

/** @type {import('tailwindcss').Config} */
module.exports = {
  borderRadius: {
    'rcorners1': '45% 46% 47% 10% / 54% 55% 54% 40%',
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        bgColor:"#00022F",
      }  ,
        borderRadius: {
        'rcorners1': '49% 52% 47% 53% / 63% 55% 48% 40% ',
        'special2':'39% 58% 37% 46% / 40% 67% 32% 60% ',
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}