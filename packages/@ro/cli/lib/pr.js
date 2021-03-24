#!/usr/bin/env node
/**
 * mac下有效，声明当前文件 使用哪种解析器
 * win下无效，win自动根据文件类型调用解析器
 */

// // 交互模块
// const inquirer = require('inquirer');

// // 内部依赖
// const { textRedBright } = require('@ro/cli-shared-utils');

// // require('../cli-editors/index').openWithBroswer(url);

// module.exports = () => {
//   console.log(textRedBright('hi, mr'));
// };

import { textRedBright } from '@ro/cli-shared-utils';

export default function () {
  console.log(textRedBright('hi, i am mr from es module'))
}
