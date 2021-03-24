参考 lodash，将函数体平铺


## 遇到难题
1. ts + rollup + commonjs(chalk.js) 
```js
  babelHelpers: 'bundled' option was used by default. It is recommended to configure this option explicitly, read more here: https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
  [!] Error: 'default' is not exported by ..\..\..\node_modules\.pnpm\chalk@4.1.0\node_modules\chalk\source\index.js, imported by src\chalk.ts
  https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
  src\chalk.ts (1:7)
  1: import chalk from 'chalk';
```
