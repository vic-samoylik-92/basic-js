const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  const variantsArr = [];
  const toStr = n.toString();
  for (let i = 0; i < toStr.length; i++) {
    if (i === 0) {
      variantsArr.push(toStr.slice(i + 1));
    } else {
      variantsArr.push(toStr.slice(0, i) + toStr.slice(i + 1));
    }
  }
  const sortedVariants = variantsArr.sort((a, b) => b - a);
  return parseInt(sortedVariants[0]);
}

module.exports = {
  deleteDigit
};
