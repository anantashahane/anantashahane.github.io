import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/anantashahane.github.io/",
  server: {
    host: '0.0.0.0', // Allows access from LAN devices
    port: 5173,      // Ensures port consistency
  },
})
