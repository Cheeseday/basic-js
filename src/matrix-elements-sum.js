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
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

function getMatrixElementsSum(matrix) {
  let elementsSum = 0;
  for (const array of transpose(matrix)) {
    let i = 0;
    while(array[i] !== 0 && i < array.length){
      elementsSum += array[i];
      i++;
    }
  }
  return elementsSum;
}

module.exports = {
  getMatrixElementsSum
};
