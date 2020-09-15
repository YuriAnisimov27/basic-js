const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    for (let i of arr) {
      if (Array.isArray(i)) {
        let counter = this.calculateDepth(i) + 1;
        depth = Math.max(depth, counter)
      }
    }
    return depth;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};