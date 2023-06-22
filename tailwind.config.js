/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black':'#172B3A',
        'hunyadi-yellow':'#ECA72C',
        'office-green':'#067408'
      }
    },
  },
  plugins: [require("daisyui")],
}

