/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // This creates the 2-second rotation
        'border-spin': 'border-spin 2s linear infinite',
        // This handles the background shimmer you had earlier
        'liquid-shine': 'liquid-shine 4s ease-in-out infinite',
      },
      keyframes: {
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'liquid-shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}