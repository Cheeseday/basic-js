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
function deleteDigit(number) {
  let array = `${number}`.split('');
  let arrayWithoutDigit = [];
  for(let i = 0; i < array.length; i++){
      let array = `${number}`.split('');
      array.splice(i, 1);
      arrayWithoutDigit.push(array.join(''));
  }
  return +arrayWithoutDigit.sort()[arrayWithoutDigit.length -1];
}

module.exports = {
  deleteDigit
};
