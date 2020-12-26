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
        blue: {
            light: colors.blue['500'],
            dark: colors.blue['800']
        },
        green: colors.green['600'],
        purple: colors.purple['600']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
