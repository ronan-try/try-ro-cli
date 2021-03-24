#!/usr/bin/env node
/**
 * mac下有效，声明当前文件 使用哪种解析器
 * win下无效，win自动根据文件类型调用解析器
 */

//  const { program } = require('commander');
 import { program } from 'commander';

// (async () => {
//   const pjson = await import('../' + 'package.json');

//   console.log(pjson);
//    console.log('---------------------------');
// })();


program
  // .version(`${require('../package.json').version}`)
  .version('1.0.0')
  .usage('<command> [options]');

program
  .command('mr')
  .description('make a mr to target-repo')
  .action(() => import('../lib/pr.js').then(jj => jj()));

  program.parse(process.argv);
