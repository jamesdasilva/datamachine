let faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let longitude = faker.address.longitude();
    return longitude;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^longitude$/
};
