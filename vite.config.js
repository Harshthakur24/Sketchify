import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './client', // tell Vite where the index.html is
  plugins: [react()],
})
