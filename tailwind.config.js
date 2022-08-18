/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#fd6d61'
      },
      content: {
        empty: '',
        arrow: '>'
      },
      borderRadius: {
        some: '40px'
      },
      boxShadow: {
        box: '0 0 24px 1px rgba(0,0,0,0.15)'
      },
      spacing: {
        custom: '10%'
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
