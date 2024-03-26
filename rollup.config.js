import * as fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import css from 'rollup-plugin-import-css';
import dts from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import path from 'path';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const externalDeps = [
  'react',
  'react-dom',
  'react-aria-components',
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
];

export default [
  {
    external: externalDeps,
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
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
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser(),
      peerDepsExternal(),
      postcss({ modules: true, extract: true }),
      css(),
    ],
  },
  {
    external: externalDeps,
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      alias({
        entries: [
          {
            find: '@awesome-ui',
            replacement: path.resolve('./src'),
          },
        ],
      }),
      dts(),
      typescriptPaths(),
    ],
  },
];
