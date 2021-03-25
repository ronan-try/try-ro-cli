#!/usr/bin/env node
/**
 * mac下有效，声明当前文件 使用哪种解析器
 * win下无效，win自动根据文件类型调用解析器
 */

// 交互模块
const inquirer = require('inquirer');
// 内部依赖
const { textRedBright } = require('@ro/cli-shared-utils/lib/umd/chalkText');
const { logStep } = require('@ro/cli-shared-utils/lib/umd/logStep')
// // require('../cli-editors/index').openWithBroswer(url);

module.exports = () => {
  console.log(textRedBright('hi, mr'));
  logStep('Hi, Here is MR');

  const curLocalBranch = 'feat_ng2vue_stand_approval';
  // const targetRepo = 'https://gitlab.ziroom.com/design-fe/fe-data-center/moonfall.git';
  const originRepo = 'https://gitlab.ziroom.com/lirn2/moonfall.git';

  const url = `${originRepo}`.replace('.git', '/merge_requests/new?') +
    'merge_request%5Bsource_branch%5D=' +
    curLocalBranch;

  require('shelljs').exec('start ' + url);
};
