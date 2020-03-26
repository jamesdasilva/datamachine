var generateString = require('../../helpers/generateString');

module.exports = {
  generate: function (type){
    if(this.isValidStringType(type)){
      var prefixo = '-dm';
      var token = generateString(6);
      var timestamp = new Date().getTime();
      return prefixo + timestamp + token;
    }
    return false;
  },
  regExp: /^id$/
};
