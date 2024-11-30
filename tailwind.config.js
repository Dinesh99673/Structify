/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#444444',
        'title':'#06b6d4',
        'btn-lnk': '#00FFFF',
        'pri-text': '#D3D3D3',
        'sec-text': '#808080',
        'hover-state': '#E0FFFF',
        'err-msg': '#FF6347',
      },
    },
  },
  plugins: [],
}

