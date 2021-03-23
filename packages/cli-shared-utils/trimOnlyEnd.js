module.exports.trimOnlyEnd = function (str, chars) {
  if (str && chars === void 0) return str;
  if (!str) return str;

  const strSplit = (str + '').split(chars);

  const result = strSplit.reduce((pre, cur, curIndex, arr) => {
    if (arr.length === curIndex + 1) {
      return pre;
    }
    if (cur === '') {
      return pre + chars + cur;
    }

    return pre + cur;
  }, '');

  return result;
};
