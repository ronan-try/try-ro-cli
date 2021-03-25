#!/usr/bin/env node
/**
 * mac下有效，声明当前文件 使用哪种解析器
 * win下无效，win自动根据文件类型调用解析器
 */

// 交互模块
const inquirer = require('inquirer');
// 内部依赖
const { textRedBright } = require('@ro/cli-shared-utils/lib/umd/chalkText');
const { logStep } = require('@ro/cli-shared-utils/lib/umd/logStep');
const {
  existGitRepo,
  gitBranchCurrent,
  gitLocalOriginURI,
} = require('@ro/cli-service/lib/umd/git');
// // require('../cli-editors/index').openWithBroswer(url);

module.exports = async () => {
  logStep`Hi, Here is MR `;

  const curWorkPath = process.cwd();

  logStep`step1: 识别当前执行环境，是否含Git Repo`;
  const existedGitRepo = await existGitRepo(curWorkPath);
  if (!existedGitRepo) {
    console.log(textRedBright`当前路径：`, curWorkPath);
    console.log(textRedBright`不存在 git repo`);
    process.exit(1);

    logStep('step2: 不含Git Repo');
    logStep('step3: 选择Git Repo');
    logStep('step4: 选择branch');
    logStep('step5: 发起MR');
  }

  logStep`step2: 含Git repo`;
  logStep`step3: 当前Gir repo 是否在config中？`;
  // 当前仅考虑内部使用，所以跳过step3
  logStep('step4: 当前branch是否为要MR的branch？');
  const curBranchName = await gitBranchCurrent(curWorkPath);
  {
    const questions = [{
      type: 'confirm',
      message: 'Make a MR/PR from current branch: ' + textRedBright(curBranchName),
      name: 'yeah'
    }];
    const { yeah } = await inquirer.prompt(questions);
    if (yeah) {
      logStep('step5: 就是当前的branch，发起MR');

      const originURI = await gitLocalOriginURI(curWorkPath);
      const url =
        `${originURI}`
          .replace('.com:', '.com/')
          .replace('git@', 'https://')
          .replace('.git', '/merge_requests/new?') +
        'merge_request%5Bsource_branch%5D=' +
        curBranchName;

      require('shelljs').exec('start ' + url);
    } else {
      // to do
    }
  }
};
