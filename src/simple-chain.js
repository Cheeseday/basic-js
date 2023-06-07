const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if(value === undefined) {
            this.chain.push(`(  )`);
        } else if(value === null || value === NaN) {
            this.chain.push(`( ${value} )`);
        } else {
            this.chain.push(`( ${value} )`);
        }
        //console.log(chainMaker.chain);
        return this;
    },
    removeLink(position) {
        const length = this.getLength();
        //console.log(length);
        if(!position || !Number.isInteger(position) || position > length || position < 1) {
            throw new Error ("You can't remove incorrect link!");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let answer = this.chain.reduce((accum, current) => accum += `~~${current}`);
        this.chain = [];
        return answer;
    }
};

module.exports = {
  chainMaker
};
