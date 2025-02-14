/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        'none': 'none',
        'distant': '2000px',
        'normal': '1000px',
        'dramatic': '500px',
      },
    },
  },
  plugins: [],
};