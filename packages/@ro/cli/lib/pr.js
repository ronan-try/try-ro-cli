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
  logStep('Hi, Here is MR');

  logStep('step1: 识别当前执行环境，是否含Git Repo');

  logStep('step2: 含Git repo');
  logStep('step3: 当前branch是否为要MR的branch？');
  logStep('step4: 就是当前的branch，发起MR');


  logStep('step2: 不含Git Repo');
  logStep('step3: 选择Git Repo');
  logStep('step4: 选择branch');
  logStep('step5: 发起MR');

  const curLocalBranch = 'feat_ng2vue_stand_approval';
  // const targetRepo = 'https://gitlab.ziroom.com/design-fe/fe-data-center/moonfall.git';
  const originRepo = 'https://gitlab.ziroom.com/lirn2/moonfall.git';

  const url = `${originRepo}`.replace('.git', '/merge_requests/new?') +
    'merge_request%5Bsource_branch%5D=' +
    curLocalBranch;

  require('shelljs').exec('start ' + url);
};
