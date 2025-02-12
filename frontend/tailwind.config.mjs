/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'grid-flow': 'grid-flow 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch-1': 'glitch-1 5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 5s infinite linear alternate-reverse',
      },
      keyframes: {
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(64px)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
          '100%': { textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
        'glitch-1': {
          '0%, 100%': { clip: 'rect(0, 0, 0, 0)' },
          '20%': { clip: 'rect(0, 100%, 0, 0)' },
          '40%': { clip: 'rect(0, 100%, 100%, 0)' },
          '60%': { clip: 'rect(100%, 100%, 100%, 0)' },
          '80%': { clip: 'rect(100%, 100%, 100%, 100%)' },
        },
        'glitch-2': {
          '0%, 100%': { clip: 'rect(100%, 100%, 100%, 100%)' },
          '20%': { clip: 'rect(100%, 100%, 100%, 0)' },
          '40%': { clip: 'rect(0, 100%, 100%, 0)' },
          '60%': { clip: 'rect(0, 100%, 0, 0)' },
          '80%': { clip: 'rect(0, 0, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
} 