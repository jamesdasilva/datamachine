var Chance = require('chance');

import getParams from '../../helpers/getParams';

module.exports = {
  generate: function (type){
    let params = getParams(type);
    let min = params[0], max = params[1];
    let chance = new Chance();
    if(this.regExp.test(type)){
      let primeNumber = chance.prime({min: min, max: max});
      return primeNumber;
    }
    return false;
  },
  regExp: /^primeNumber:\d*;\d*$/
};
