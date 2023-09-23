/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#2563eb',
      },
      fontFamily: {
        ms: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
