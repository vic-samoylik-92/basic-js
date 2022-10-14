const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storage: [],
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    this.storage.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position > this.getLength() ||
      !Number.isInteger(position) ||
      position < 1
    ) {
      this.storage = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.storage.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    let chain = "";
    for (let i = 0; i < this.storage.length; i++) {
      if (i === this.storage.length - 1) {
        chain += `( ${this.storage[i]} )`;
      } else {
        chain += `( ${this.storage[i]} )~~`;
      }
    }
    this.storage = [];
    return chain;
  },
};

module.exports = {
  chainMaker
};
