const plugin = require('tailwindcss/plugin');

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Thay thế font sans mặc định bằng Be Vietnam Pro
        sans: ['"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': 'inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(255, 255, 255, 0.05)',
      },
      // Giữ nguyên các cấu hình mở rộng khác nếu có (ví dụ màu sắc)
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Nếu anh có dùng plugin animation
    plugin(function({ addVariant }) {
      addVariant('glass', '.glass-mode &')
    })
  ],
}