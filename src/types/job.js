var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let title = faker.name.title();
    return title;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^title$/
};
