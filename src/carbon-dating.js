const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let numberActivity = parseFloat(sampleActivity);
    if (numberActivity < 15 && numberActivity > 0) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / numberActivity) / (.693 / HALF_LIFE_PERIOD));
    }
    else {
      return false;
    }
  } else {
    return false;
  }

  // throw new CustomError('Not implemented');
  // return sampleActivity || false;

  // remove line with error and write your code here
};
