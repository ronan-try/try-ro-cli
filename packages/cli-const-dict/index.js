(() => {
  try {
    const trimEnd = require('lodash/trimEnd');
    const { resolve } = require('path');
    const pathLib = resolve(__dirname, './lib');
  
    const fileNames = require('fs').readdirSync(pathLib);

    if (!Array.isArray(fileNames)) throw new Error('cli-const-dict 无lib');
    if (fileNames.length === 0) throw new Error('cli-const-dist lib文件夹无文件');

    fileNames.forEach(fileName => {
      const keyName = trimEnd(fileName, '.js');
      const filePath = resolve(__dirname, './lib/' + fileName);
      module.exports[keyName] = require(filePath);
    });
  } catch (error) {
    throw new Error('cli-const-dict 读取lib文件失败')
  }
})();
