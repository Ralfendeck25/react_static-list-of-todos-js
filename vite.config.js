import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Corrige o aviso "base option"
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
