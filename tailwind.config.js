/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
    },
    container:{
      center: true,
      screens: {
        "xxs": "320px",
        "xs": "500px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px"
      },
      padding:{
        "xxs": "10px",
        "xs": "10px",
        "sm": "20px",
        "md": "50px",
        "lg": "120px",
        "xl": "140px",
        "2xl": "168px"
      }
    }
  },
  plugins: [],
}

