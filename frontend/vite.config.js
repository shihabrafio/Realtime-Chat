import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base:"https://realtime-chat-frontend-2ync.onrender.com/",
  plugins: [react(),],
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
})
