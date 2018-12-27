var Chance = require('chance');

var getParams = require('../helpers/getParams');

function generate(type){
	let params = getParams(type);
	let min = params[0], max = params[1];
  let chance = new Chance();
  if(this.regExp.test(type)){
    let primeNumber = chance.prime({min: min, max: max});
    return primeNumber;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^primeNumber:\d*;\d*$/
};
