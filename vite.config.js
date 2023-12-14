import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
   root: 'src',
   build: {
      emptyOutDir: true,
      outDir: '../dist'
   },
   plugins: [
      react({
         include: '**/*.{jsx,tsx}',
      })
   ]
});