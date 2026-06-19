/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F4E8",
        primary: "#111111",
        secondary: "rgba(0,0,0,0.6)",
        accent: "#D4A900",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      minHeight: {
        'screen': '100vh',
      }
    },
  },
  plugins: [],
}