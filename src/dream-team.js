const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstMembersArray = [];
  if(!Array.isArray(members)) {
    return false;
  }
  for(elem of members) {
    if(typeof elem === 'string') {
      firstMembersArray.push(elem.trimStart()[0].toUpperCase());
    }
  }
  return firstMembersArray.sort(_compareFn).join('');
}

function _compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

module.exports = {
  createDreamTeam
};
