/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        backgroundImage:{
            'yety-logo':"url('/public/yety-logo.png')"
        }
    },
  },
  plugins: [],
}
