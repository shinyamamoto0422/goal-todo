const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        white1: '#d8dee4',
        white2: '#9e9c9e',
        white3: '#565656',
        black1: '#161b22',
        black2: '#0d1117',
        purple1: '#C7D2FE',
        purple2: '#A5B4FC',
        purple3: '#818CF8',
        purple4: '#7879F1',
        purple5: '#4F46E5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}