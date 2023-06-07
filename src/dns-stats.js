const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let allDomainsArray = [];
  for (const domain of domains) {
    let subdomainsArray = domain.split('.').reverse();
    for(let i = 0; i < subdomainsArray.length; i++){
      let dom ='.' + subdomainsArray.slice(0, i + 1).join('.');
      allDomainsArray.push(dom);
    }
  }
  for (const domain of allDomainsArray) {
    if(!Object.hasOwn(obj, `${domain}`)) {
      obj[`${domain}`] = 1;
    } else {
      obj[`${domain}`]++;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
