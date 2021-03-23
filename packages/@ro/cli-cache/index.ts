import fs from 'fs';
import { textRedBright } from '@ro/cli-shared-utils';

/** 得到 有效的缓存路径 */
function getCachePath (targetPath: string) {
  if (fs.existsSync(targetPath)) return targetPath;

  fs.writeFileSync(targetPath, JSON.stringify([]));
  return targetPath;
}

/** 得到 有效的缓存数据 */
function getCacheData (targetPath: string) {
  const _path_ = getCachePath(targetPath);

  return require(_path_);
}

function validateCacheDataEmpty (data: any[]) {
  if (!Array.isArray(data)) {
    console.log(textRedBright('cache data is not array'), 'please ro check');
    process.exit(1);
  }

  if (data.length < 1) {
    console.log(textRedBright('cache data is empty'), 'please ro add');
    process.exit(1);
  }

  return data;
}

[
  'localProjects.hidden.json',
].forEach(fileName => {
  const name = fileName.split('.')[0];

  const obj = Object.create(null);
  const _path_ = cachePath('./' + fileName);
  const _raw_ = cacheData(_path_);
  const _valid_ = validCacheData(_raw_);

  obj['cache' + name + 'Path'] = _path_;
  obj['cache' + name + 'Raw'] = _raw_;
  obj['cache' + name + 'Valid'] = _valid_;
  Object.assign(exports, obj);
});
