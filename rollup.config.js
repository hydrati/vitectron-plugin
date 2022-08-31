import path from 'path'
import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import esbuild from 'rollup-plugin-esbuild'

export default defineConfig({
  input: path.resolve(__dirname, 'src', 'index.ts'),
  plugins: [
    ts(),
    esbuild({
      minify: true,
    }),
  ],
  output: {
    dir: path.resolve(__dirname, 'dist'),
    format: 'cjs',
  },
})
