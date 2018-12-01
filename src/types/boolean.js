var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let boolean = faker.random.boolean();
    return boolean;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^boolean$/
};
