import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// konfigurasi untuk GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/dapur-edun/', // sesuai nama repo
})
