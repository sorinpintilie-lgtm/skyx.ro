/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-cyan': '#00B4D8',
        'sky-light': '#90E0EF',
        'sky-dark': '#0077B6',
        'sky-blue': '#87CEEB',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fly-in-right': 'flyInRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fly-in-left': 'flyInLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'popup': 'popup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'hover-drone': 'hoverDrone 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flyInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px) translateY(-50px) rotate(15deg) scale(0.5)',
          },
          '60%': {
            transform: 'translateX(-20px) translateY(10px) rotate(-5deg) scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          },
        },
        flyInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px) translateY(-50px) rotate(-15deg) scale(0.5)',
          },
          '60%': {
            transform: 'translateX(20px) translateY(10px) rotate(5deg) scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          },
        },
        popup: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        hoverDrone: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};