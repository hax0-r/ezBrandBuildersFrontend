/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nekst: ['Nekst', 'sans-serif'],
      },
      colors: {
        'purple': '#5f29b7',
      },
      keyframes: {
        'horizontal-shaking': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
          '75%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'horizontal-shake': 'horizontal-shaking 0.8s infinite',
      },
    },
    plugins: [],
  }
}