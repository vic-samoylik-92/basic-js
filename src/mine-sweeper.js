const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.length === 3 ? [[], [], []] : [[], []];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let mineCounter = 0;
      if (matrix.length === 3) {
        if (i === 0) {
          if (j === 0) {
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
          } else if (j === 1) {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
          } else {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
          }
        } else if (i === 1) {
          if (j === 0) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
          } else if (j === 1) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
          } else {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
          }
        }
        if (i === 2) {
          if (j === 0) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
          } else if (j === 1) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
          } else {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
          }
        }
      }
      if (matrix.length === 2) {
        if (i === 0) {
          if (j === 0) {
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
          } else if (j === 1) {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
          } else {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i + 1][j]) {
              mineCounter++;
            }
            if (matrix[i + 1][j - 1]) {
              mineCounter++;
            }
          }
        } else if (i === 1) {
          if (j === 0) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
          } else if (j === 1) {
            if (matrix[i][j + 1]) {
              mineCounter++;
            }
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j + 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
          } else {
            if (matrix[i][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j - 1]) {
              mineCounter++;
            }
            if (matrix[i - 1][j]) {
              mineCounter++;
            }
          }
        }
      }
      result[i].push(mineCounter);
      mineCounter = 0;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
