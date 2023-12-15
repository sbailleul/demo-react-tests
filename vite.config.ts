import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    css: true,
    environment: 'jsdom',
    setupFiles: './setup.ts',
  },
});