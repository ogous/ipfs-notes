const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        layer: '#161714',
        primary: '#266fc0',
        secondary: '#af5dc3',
        tertiary: '#57bd50',
        text: '#cccccc'
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')]
}
