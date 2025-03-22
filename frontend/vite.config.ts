import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' }) // ✅ Compression gzip à la génération
  ],
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
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false, // ✅ Désactivé en prod pour allègement
    minify: 'esbuild', // ✅ Minification explicite
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});
