const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true) {
    this.direction = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    const res = [...message].map(char => {
      return (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90)
        ? char
        : String.fromCharCode((char.charCodeAt(0) + key.charCodeAt(index++ % key.length)) % 26 + 65);
    });
    return this.direction ? res.join('') : [...res].reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    const res = [...message].map(char => {
      return (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90)
        ? char
        : String.fromCharCode((char.charCodeAt(0) - key.charCodeAt(index++ % key.length) + 26) % 26 + 65);
    });
    return this.direction ? res.join('') : [...res].reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
