var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let name = faker.name.findName();
    return name;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^name$/
};
