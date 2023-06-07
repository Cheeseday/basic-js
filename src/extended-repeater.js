const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(str, options) {
//   str = `${str}`;
//   let arr = [];
//   if(!options.separator) options.separator = '+';
//   if(!options.additionSeparator) options.additionSeparator = '|';
//   if(options.addition) {
//       options.addition = `${options.addition}`;
//   } else if(!options.addition && +options.repeatTimes) {
//       for(let i = 0; i < options.additionRepeatTimes; i++){
//           arr.push(`${str}`);
//       }
//       return arr.join(`${options.separator}`);
//   } else if (!options.addition && !options.repeatTimes) {
//       return str;
//   }
//   arr = [];
//   if(options.additionRepeatTimes){
//       for(let i = 0; i < options.additionRepeatTimes; i++){
//           arr.push(`${options.addition}`);
//       }
//   }
//   let additionStr = str + arr.join(`${options.additionSeparator}`);
//   arr = [];
//   for(let i = 0; i < options.repeatTimes; i++){
//       arr.push(`${additionStr}`);
//   }
//   return arr.join(`${options.separator}`);  
// }


// function _createRepeatedArray(string, repeatTimes){
//   for(let i = 0; i < repeatTimes; i++){
//     arr.push(`${string}`);
//   }
//   return arr;
// }
function repeater(str, options) {
  str = `${str}`;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(options.addition !== undefined) {
      options.addition = `${options.addition}`;
  }
  if(!options.addition && +options.repeatTimes) {
      return _createRepeatedArray(str, options.repeatTimes).join(`${options.separator}`);
  }
  if (!options.addition && !options.repeatTimes) {
      return str;
  }
  if (!options.additionRepeatTimes && !options.repeatTimes) {
    return str + options.addition;
  }
  if (options.addition && options.repeatTimes && !options.additionRepeatTimes) {
    return _createRepeatedArray(str + options.addition, options.repeatTimes).join(`${options.separator}`);
  }
  let additionStr = str + _createRepeatedArray(options.addition, options.additionRepeatTimes).join(`${options.additionSeparator}`);
  return _createRepeatedArray(additionStr, options.repeatTimes).join(`${options.separator}`); 
}

function _createRepeatedArray(string, repeatTimes){
  let arr = [];
  for(let i = 0; i < repeatTimes; i++){
      arr.push(`${string}`);
  }
  return arr;
}

module.exports = {
  repeater
};
