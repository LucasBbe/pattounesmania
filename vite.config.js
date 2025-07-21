import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pattounesmania/', // <= nom du repo GitHub
  plugins: [react()],
});