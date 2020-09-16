const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition = ('addition' in options) ? '' + options.addition : '';
  const separator = typeof options.separator === 'string' ? options.separator : '+';
  const additionSeparator = typeof options.additionSeparator === 'string' ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes || 0;
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes || 0;

  let res = '';
  for (let i = 0; i < (repeatTimes); i++) {
    res = res + str;
    if (additionRepeatTimes) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        res = res + addition + additionSeparator;
      }
      let lastIndex = res.lastIndexOf(additionSeparator);
      res = res.substring(0, lastIndex);
    }
    res = res + separator;
  }

  let lastIndex = res.lastIndexOf(separator);
  return res.substring(0, lastIndex);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  