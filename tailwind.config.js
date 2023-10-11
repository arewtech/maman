/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '7rem',
          '2xl': '8rem'
        }
      },
      colors: {
        avatar: 'rgb(111 112 112 / 8%)',
        circle: 'rgba(219, 219, 219, 0.24)'
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        '3xl': '0 3px 10px 0 rgb(0 0 0 / 3%)'
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}
