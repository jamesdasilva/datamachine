var Word = require('./word');

function generate(type){
  if(this.regExp.test(type)){
    var prefixo = '-dfm';
    var token = Word.generate(12);
    var timestamp = new Date().getTime();
    return prefixo +'-'+ timestamp +'-'+ token;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^id$/
};
