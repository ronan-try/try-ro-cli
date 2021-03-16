const chalk = require('chalk');
const A = require('workspace-a');

(() => {
  console.group(chalk.redBright('This is in workspace-b'));

  A.helloA();

  console.groupEnd();
})();