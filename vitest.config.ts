import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

import path from 'path';
const _resolve = (dir: string) => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@awesomeui': _resolve('src'),
    },
  },
});
