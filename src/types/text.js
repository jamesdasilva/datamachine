var loremIpsum = require('lorem-ipsum');

function generate(type){
  if(this.regExp.test(type)){
    var params = this.getParams(type);
    var length = params[0];
    return loremIpsum({
      count: length, 
      units: 'words'
    });
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^text:\d+$/
};
