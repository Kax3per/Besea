import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Besea/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['swiper']
  }
});


//git init
//git add .
//git commit -m ""
//git push -u origin main
//npm run build
// npm run deploy