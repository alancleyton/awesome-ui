import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import css from 'rollup-plugin-import-css';
import dts from 'rollup-plugin-dts';

import * as fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: '@acads/awesome-ui',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.prod.json' }),
      terser(),
      external(),
      postcss({ modules: true, extract: true }),
      css(),
    ],
  },
  {
    input: 'dist/esm/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
