const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const reArranged = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const tempArr = [];
    tempArr.push(matrix[0][i]);
    let index = 1;
    while (index < matrix.length) {
      tempArr.push(matrix[index][i]);
      index += 1;
    }
    reArranged.push(tempArr);
  }
  let sum = 0;
  for (let item of reArranged) {
    for (let num of item) {
      if (num === 0) {
        break;
      } else {
        sum += num;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
