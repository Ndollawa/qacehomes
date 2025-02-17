/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  darkMode:"class", 
  theme: {
    extend: { 
      colors: {
       "qacehomes-blue": "#1F48B5",
       "qacehomes-blue-primary": "#2B47D9",
      },
      fontFamily: {
        Urbanist: ['"Urbanist"', "sans-serif"],
      },
    },
  },
 plugins: [
    require('flowbite/plugin')
  ],
}
