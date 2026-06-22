/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3E8C8",
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
      },
      // Added animation extension
      animation: {
        'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
