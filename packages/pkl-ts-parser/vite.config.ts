/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

const external = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ outDir: resolve(__dirname, './.cache/dts') })],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    coverage: {
      reporter: ['clover', 'json', 'lcov', 'text'],
      provider: 'istanbul',
    },
  },
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/antlr.ts'),
      ],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external,
    },
  },
});
