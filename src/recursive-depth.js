const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//     counter = 1;
//     currentCounter = 1;
//     calculateDepth(arr) {
//         arr.forEach(element => {
//             if(Array.isArray(element)){
//                 this.currentCounter++;
//                 this.calculateDepth(element);
//             }
//             if(this.currentCounter > this.counter) {
//                 this.counter = this.currentCounter;
//             }
//             this.currentCounter = 1;
//         });
//         return this.counter;
//     }
// }

class DepthCalculator {
    calculateDepth(/* arr */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  }

module.exports = {
  DepthCalculator
};
