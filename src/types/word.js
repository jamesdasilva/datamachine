let faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let word = faker.lorem.word();
    return word;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^word$/
};
