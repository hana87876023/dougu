/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'sand-beige': '#D4A574',
        'warm-orange': '#E76F51',
        'off-white': '#FAF8F3',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '30px',
        '3xl': '40px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

