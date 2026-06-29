/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3E8F',
        secondary: '#4A5C9E',
        accent: '#E63946',
        background: '#FAFAF7',
        surface: '#F0EDE8',
        text: '#1A1A1A',
        'text-muted': '#6B6B6B',
        border: '#E0DDD8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(45, 62, 143, 0.08)',
        'card-hover': '0 8px 30px rgba(45, 62, 143, 0.12)',
      },
    },
  },
  plugins: [],
}
