var Chance = require('chance');

function generate(type){
  var chance = new Chance();
  if(this.regExp.test(type)){
    let cpf = chance.cpf();
    return cpf;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^cpf$/
};
