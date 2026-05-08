/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#faf9f6',
        charcoal: '#1a1a1a',
        gold: '#c9a47d',
        terracotta: '#e07a5f',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 164, 125, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(201, 164, 125, 0)' },
        },
      },
    },
  },
  plugins: [],
}
