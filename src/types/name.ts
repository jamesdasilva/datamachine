var faker = require('faker');


module.exports = {
  generate: function generate(type){
    if(this.regExp.test(type)){
      let name = faker.name.findName();
      return name;
    }
    return false;
  },
  regExp: /^name$/
};
