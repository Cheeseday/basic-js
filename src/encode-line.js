const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let compressedString = "";
  let charsArray = str.split("");
  for (let i = 0; i < charsArray.length; i++){
      let count = 1
      let currentLetter = charsArray[i];
      while (i < charsArray.length - 1 && charsArray[i] === charsArray[i + 1]){
          count++;
          i++;
      }
      if(count === 1) {
          compressedString += currentLetter;
      } else {
          compressedString += count + currentLetter;
      }
  }
  return compressedString;
}

module.exports = {
  encodeLine
};
