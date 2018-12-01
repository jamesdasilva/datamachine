var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let latitude = faker.address.latitude();
    return latitude;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^latitude$/
};
