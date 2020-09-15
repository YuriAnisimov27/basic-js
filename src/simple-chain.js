const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position === 'number' && (position ^ 0) === position) {
      if (position < 1 || position > this.getLength()) {
        this.chain = [];
        throw new Error('Out of range');
      }
      const index = position - 1;
      this.chain.splice(index, 1);
      return this;
    }
    this.chain = [];
    throw new Error('Position is not integer number');
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const chaining = this.chain.join('~~');
    this.chain = [];
    return chaining;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
