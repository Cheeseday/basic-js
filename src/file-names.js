const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(namesArray) {
  const repeatedNamesMap = new Map();
  let resultArray = [];
  for(element of namesArray){
      if(!resultArray.includes(element)) {
          repeatedNamesMap.set(element, 0);
          resultArray.push(element);
      } else {
          const mappedElement = repeatedNamesMap.get(element);
          if(mappedElement) {
              resultArray.push(element + `(${mappedElement + 1})`);
          } else {
              resultArray.push(element + `(${1})`);
          }
          repeatedNamesMap.set(element, mappedElement + 1);
      }
  }
  return resultArray;
}

module.exports = {
  renameFiles
};
