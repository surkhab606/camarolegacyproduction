import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // 👈 Ensures Vite looks in the correct place
  build: {
    outDir: 'dist',  // 👈 Ensures Vercel deploys the right folder
  }
});
