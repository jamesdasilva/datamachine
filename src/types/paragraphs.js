var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let paragraphs = faker.lorem.paragraphs();
    return paragraphs;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^paragraphs$/
};
