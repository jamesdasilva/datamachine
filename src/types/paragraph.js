var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let paragraph = faker.lorem.paragraph();
    return paragraph;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^paragraph$/
};
