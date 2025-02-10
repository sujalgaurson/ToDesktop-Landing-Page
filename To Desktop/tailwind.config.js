/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        "primary": '#3238f2',
      },
      fontfamily: {
        'display': ['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

