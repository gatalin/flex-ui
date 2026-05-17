import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig([
  // JS bundle
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    outDir: 'dist',
    onSuccess: async () => {
      // Copy CSS tokens into dist/styles/
      mkdirSync('dist/styles', { recursive: true })
      copyFileSync('src/styles/tokens.css', 'dist/styles/tokens.css')
      console.log('✓ CSS tokens copied to dist/styles/tokens.css')
    },
  },
])
