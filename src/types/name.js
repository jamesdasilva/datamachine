var loremIpsum = require('lorem-ipsum');

function generate(type){
  if(this.regExp.test(type)){
    var length = Math.floor(Math.random() * 3) + 2;
    return loremIpsum({
      count: length, 
      units: 'words'
    }).trim();
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^name$/
};
