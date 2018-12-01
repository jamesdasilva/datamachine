var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let lastName = faker.name.lastName();
    return lastName;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^lastName$/
};
