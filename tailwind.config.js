/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: ['Poppins', 'sans-serif'],
      backgroundImage: {
        'home': 'url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      }
    },
  },
  plugins: [],
}

