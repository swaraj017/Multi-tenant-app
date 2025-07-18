import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssVite from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
  plugins: [
    react(),
    tailwindcssVite()  
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    base: '/',
  }
});

 
    
 
