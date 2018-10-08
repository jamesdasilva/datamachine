var loremIpsum = require('lorem-ipsum');

function generate(type){
  if(this.regExp.test(type)){
    var dominios = ['gmail.com', 'yahoo.com.br', 'outlook.com', '1sti.com.br', 'vnw.com.br'];
    var indexDominio = Math.floor(Math.random() * dominios.length);
    var nick = loremIpsum({
      count: 1, 
      units: 'words'
    });
    return `${nick}@${dominios[indexDominio]}`;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^email$/
};
