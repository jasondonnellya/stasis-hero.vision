const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['eight-bit-dragon-font', ...defaultTheme.fontFamily.sans],
        'ancient' : ['ancient-modern-tales-font'],
        'dragon' : ['eight-bit-dragon-font']
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
