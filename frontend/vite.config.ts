import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist', // ✅ Assure que le build est bien dans frontend/dist
    emptyOutDir: true, // ✅ Nettoie le dossier avant chaque build
  }
});
