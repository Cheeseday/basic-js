const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexesArray = [];
  let resultArray = arr.filter((value, index) => {
    if(arr[index] === -1) {
      indexesArray.push(index);
    }
    return value !== -1;
  });
  resultArray.sort(sortFn);
  for (const index of indexesArray) {
    resultArray.splice(index, 0, -1);
  }
  return resultArray
}

function sortFn(a, b) {
  if(a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = {
  sortByHeight
};
