var Chance = require('chance');

module.exports = {
  generate: function (type) {
    var chance = new Chance();
    if(this.regExp.test(type)){
      let cpf = chance.cpf();
      return cpf;
    }
    return false;
  },
  regExp: /^cpf$/
};
