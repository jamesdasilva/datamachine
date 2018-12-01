var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let firstName = faker.name.firstName();
    return firstName;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^firstName$/
};
