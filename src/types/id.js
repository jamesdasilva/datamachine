let generateString = require('../helpers/generateString');

function generate(type){
  if(this.regExp.test(type)){
    var prefixo = '-dm';
    var token = generateString(6);
    var timestamp = new Date().getTime();
    return prefixo +'-'+ timestamp +'-'+ token;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^id$/
};
