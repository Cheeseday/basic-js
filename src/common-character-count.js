const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const charsStr1 = str1.split('');
  let charsStr2 = str2.split('');
  let counter = 0;
  charsStr1.forEach((element) => {
    let i = 0;
    while(i < charsStr2.length) {
      if(element === charsStr2[i]) {
        charsStr2.splice(i, 1);
        counter++;
        break;
      }
      i++;
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
