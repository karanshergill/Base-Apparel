/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      backgroundImage: {
        'desktop-img': "url('/bg-pattern-desktop.svg')",
        'gradient-1': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        'gradient-2': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
      },
      colors: {
        'red-desaturated': 'hsl(0, 36%, 70%)',
        'red-soft': 'hsl(0, 93%, 68%)',
        'red-grayish': 'hsl(0, 6%, 24%)'
      },
      fontFamily: {
        'josefin': "'Josefin Sans Variable', 'sans-serif'"
      },
      letterSpacing: {
        widest: '0.25em'
      }
    },
  },
  plugins: [],
}

