/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/src/assets/img.png')",
        'register-bg': "url('/src/assets/img_2.png')",
      },
    },
  },
  plugins: [],
}

