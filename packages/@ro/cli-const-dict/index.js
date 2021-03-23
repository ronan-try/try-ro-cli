const { trimOnlyEnd } = require('@ro/cli-shared-utils');
const { resolve } = require('path');
const pathLib = resolve(__dirname, './lib');

export { gi } from './lib/Gits';


(() => {
  try {
    const fileNames = require('fs').readdirSync(pathLib);

    if (!Array.isArray(fileNames)) throw new Error('cli-const-dict 无lib');
    if (fileNames.length === 0) throw new Error('cli-const-dist lib文件夹无文件');

    fileNames.forEach(fileName => {
      // const keyName = trimOnlyEnd(fileName, '.js');
      // const filePath = resolve(__dirname, './lib/' + fileName);
      // // module.exports[keyName] = require(filePath);

      // console.log(fileName, '-----', keyName);
    });
  } catch (error) {
    throw new Error('cli-const-dict 读取lib文件失败')
  }
})();
