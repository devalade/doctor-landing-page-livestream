/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': "#F2F7FF",
        'primary': "#3A8EF6",
        'secondary': "#6F3AFA",
        'second': "#6C87AE"
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)" 
      },
      fontFamily: {
        sans: ['Sora', 'Helvetica'],
        poppins: ['Poppins', 'Arial']
      }
    },
  },
  plugins: [],
}

