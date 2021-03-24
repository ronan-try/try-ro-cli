// path
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

// .d.ts 生成
import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];

const pathSrc = (fileName) => path.resolve(`./src/${fileName}.ts`);
const pathLib = (fileName) => path.resolve(`./lib/${fileName}.js`);
const pathLibMini = (fileName) => path.resolve(`./lib/mini/${fileName}.js`);
const pathTypes = (fileName) => path.resolve(`./lib/${fileName}.d.ts`);

function chunk (input, name) {
  // .d.ts 配置文件
  const configDTS = {
    input: pathSrc(input),
    output: {
      file: pathTypes(name),
      format: 'es',
    },
    plugins: [dts()],
  };

  // umd 配置文件
  const configUMD = {
    input: pathSrc(input),
    output: [
      {
        file: pathLib(name),
        format: 'umd',
        name,
      },
      // {
      //   file: pathLibMini(name),
      //   format: 'umd',
      //   name,
      //   compact: true,
      //   plugins: [
      //     terser(),
      //   ],
      //   sourcemap: true,
      // }
    ],
    plugins: [
      nodeResolve(
        // { extensions }
      ),
      // commonjs(),
      babel({
        // exclude: 'node_modules/**',
        // extensions,
        // babelHelpers: 'runtime',
      }),
      typescript(),
      sourcemaps(),
    ],
  };
  return [configUMD];
}

export default [
  ...chunk('chalk', 'chalk'),
]
