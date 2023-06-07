const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if(!(array instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let arrayCopy = array;
  let resArray = [];
  let flag = false;
  for (const element of arrayCopy) {
    let index = array.indexOf(element);
    if(element === '--double-next' && arrayCopy[index + 1]) {
      resArray.push(arrayCopy[arrayCopy.indexOf(element) + 1]);
    } else if(element === '--double-prev' && arrayCopy[index - 1] && !flag) {
      resArray.push(arrayCopy[arrayCopy.indexOf(element) - 1]);
    } else if(element === '--discard-next' && arrayCopy[index + 1]) {
      arrayCopy.splice((arrayCopy.indexOf(element) + 1), 1);
      flag = true;
    } else if(element === '--discard-prev' && arrayCopy[index - 1] && !flag) {
      resArray.pop(arrayCopy[arrayCopy.indexOf(element) - 1]);
    } if(element !== '--double-next' && element !== '--double-prev' && element !== '--discard-next' && element !== '--discard-prev') {
      resArray.push(element);
      flag = false;
    }
  }
  return resArray;
}

module.exports = {
  transform
};
