// path
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
// 压缩
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
// 清楚文件夹
// import { cleandir } from 'rollup-plugin-cleandir';
import del from 'del';

// // 生成 .d.ts 好像自动可以生成
// import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];
/** 告诉rollup 不要打包，而是作为外部依赖 */
const external = ['chalk'];
/** 告诉 rollup 全剧变量
 * 例如{jquery:$},就是高速rollup全剧变量$是jquery
 */
const globals = { 'chalk': 'chalk' };

const pathSrc = (fileName) => path.resolve(`./src/${fileName}.ts`);
const pathLib = (fileName) => path.resolve(`./lib/${fileName}.js`);
const pathLibMini = (fileName) => path.resolve(`./lib/mini/${fileName}.js`);
// const pathTypes = (fileName) => path.resolve(`./lib/${fileName}.d.ts`);

function chunk(input, name) {
  const configs = [];

  // // .d.ts 配置文件
  // configs.push({
  //   input: pathSrc(input),
  //   output: {
  //     file: pathTypes(name),
  //     format: 'es',
  //   },
  //   plugins: [dts()],
  // });

  // umd 配置文件
  configs.push({
    input: pathSrc(input),
    output: [
      {
        file: pathLib(name),
        format: 'umd',
        name,
        globals,
      },
      {
        file: pathLibMini(name),
        format: 'umd',
        name,
        compact: true,
        plugins: [
          terser(),
        ],
        sourcemap: true,
        globals,
      },
    ],
    external,
    plugins: [
      typescript(),
      nodeResolve(
        {
          extensions,
          modulesOnly: true,
          preferredBuiltins: false
        }
      ),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions,
        babelHelpers: 'bundled',
      }),
      sourcemaps(),
      // dts(),
    ],
  });

  return configs;
}

// 这是比较坑的地方，原来每个config 都clear一边
// cleandir('./lib');
del.sync('./lib');

export default [
  ...chunk('trimOnlyEnd', 'trimOnlyEnd'),
  ...chunk('chalkText', 'chalkText'),
]
