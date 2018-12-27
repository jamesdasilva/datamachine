let generateString = require('../helpers/generateString');

function generate(type){
  if(this.isValidStringType(type)){
    var prefixo = '-dm';
    var token = generateString(6);
    var timestamp = new Date().getTime();
    return prefixo + timestamp + token;
  }
  return false;
}
function isValidStringType(type){
  return this.regExp.test(type);
}
module.exports = {
  generate: generate,
  regExp: /^id$/,
  isValidStringType: isValidStringType
};
