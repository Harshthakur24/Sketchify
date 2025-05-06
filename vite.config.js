import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist', // puts output in root/dist
    emptyOutDir: true
  },
  plugins: [react()]
})
