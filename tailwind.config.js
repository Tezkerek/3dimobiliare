const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        white: colors.white,
        gray: {
            deep: '#2a2a2b'
        },
        orange: colors.orange['600'],
        blue: colors.blue['400'],
        purple: colors.purple['600']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
