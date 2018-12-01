var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let email = faker.internet.email();
    return email.toLocaleLowerCase();
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^email$/
};
