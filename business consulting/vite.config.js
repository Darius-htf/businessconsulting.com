import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname , 'public'),
      '$': path.resolve(__dirname, "business consulting")
    }
  },
  plugins: [react()],
})