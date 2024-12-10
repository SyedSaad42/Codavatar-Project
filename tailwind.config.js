/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        gradient: {
          start: 'var(--gradient-start)',
          middle: 'var(--gradient-middle)',
          end: 'var(--gradient-end)'
        }
      },
    backgroundImage: {
   'gradient-custom': 'linear-gradient(135deg, #9333EA 0%, #A855F7 50%, #F97316 100%)',
    },},
  },
  plugins: [],
}

