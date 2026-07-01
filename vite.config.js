import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 1 Import Tailwind
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() //2. Call Function
  ],
})

