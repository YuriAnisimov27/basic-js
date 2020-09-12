const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.filter(el => typeof(el) === 'string' && el !== ' ').map(el => el.trim().slice(0, 1).toUpperCase()).sort().join('');
  } else {
    return false;
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
