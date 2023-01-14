/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "public/*.{html,js}"],
  theme: {
    extend: {
      
    },
    boxShadow: {
      '3xl': '0px 4px 10px rgba(0, 0, 0, 0.12);',
      'drop': '0px 4px 6px rgba(0, 0, 0, 0.12);',
    },
    gridTemplateRows: {
      'foot' : 'repeat(4, minmax(0, auto));',
    },
  },
  plugins: [],
}
