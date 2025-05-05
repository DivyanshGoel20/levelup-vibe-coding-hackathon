import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      cesium: 'cesium',
    },
  },
  optimizeDeps: {
    exclude: ['cesium'],
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium'),
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
});
