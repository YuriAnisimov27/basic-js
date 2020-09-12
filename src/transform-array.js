const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const res = [...arr];
    for (let i = 0; i < res.length; i++) {
      switch (res[i]) {
        case '--discard-next':
          res[i + 1] = undefined;
          res[i] = undefined;
          break;
        case '--discard-prev':
          if (i === 0) {
            res[i] = undefined;
          } else {
            res[i - 1] = undefined;
            res[i] = undefined;
          }
          break;
        case '--double-next':
          if ((i + 1) === res.length) {
            res[i] = undefined;
          } else {
            res[i] = res[i + 1];
          }
          break;
        case '--double-prev':
          res[i] = res[i - 1];
          break;
      }
    }
    return res.filter(el => (el !== undefined));
} else {
    throw new Error();
}
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
