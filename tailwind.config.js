/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{js, jsx, ts, tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

