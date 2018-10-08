var loremIpsum = require('lorem-ipsum');

function generate(type){
  if(this.regExp.test(type)){
    return loremIpsum({
      count: 1, 
      units: 'words'
    });
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^word:\d+$/
};
