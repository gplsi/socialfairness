import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  server: {
   host: true,
   port: 8000,
   hmr: {
       host: "localhost",
       protocol: "ws",
   },
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [{ find: "src", replacement: resolve(__dirname, "./src") }]
  }
})
