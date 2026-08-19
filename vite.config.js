import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/oembed': {
        target: 'https://www.instagram.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/oembed/, '/oembed'),
      },
    },
  },
})
