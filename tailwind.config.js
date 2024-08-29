/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'greennude':'#0a192f',
      'textgreen':'#5be8c9',
      'fontcolor':'#ccd6f6',
      'fontnude':'#a8b2d1',
      'newblue':'#112240',
      'newgreen':"#60e8cf",
      'black': "#000000"

    },
    extend: {
      fontFamily:{
        'firacode':["FiraCode",'SF Mono'],
        'robot':['RobotoMono','monospace']
      },
      screens: {
        'phone':'680px',
 
       'tablet': '810px',
       // => @media (min-width: 640px) { ... }
 
       'laptop': '1024px',
       // => @media (min-width: 1024px) { ... }
 
       'desktop': '1280px',
       // => @media (min-width: 1280px) { ... }
     },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}