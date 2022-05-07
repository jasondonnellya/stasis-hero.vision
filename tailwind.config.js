const defaultTheme = require('tailwindcss/defaultTheme')
const { _generateTailwindSafelist } = require('./src/js/utilities')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  /* tailwindcss cannot generate dynamic classes so safelist dynamic globalSpacing classes */
  safelist: _generateTailwindSafelist(),
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'ancient' : ['ancient-modern-tales-font'],
        'dragon' : ['eight-bit-dragon-font'],
        'sans': ['eight-bit-dragon-font', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#54ffc2',
        secondary: '#fd56d1',
        tertiary: '#181e43',
        link: '#80f0ff',
      },
    },
  },
  plugins: [],
}
