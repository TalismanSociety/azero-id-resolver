import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    dts: {
      entry: ['src/index.ts'],
    },
    sourcemap: true,
    clean: true,
    minify: !options.watch,
  }
})
