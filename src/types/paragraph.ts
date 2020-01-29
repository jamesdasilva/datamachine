var faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let paragraph = faker.lorem.paragraph();
      return paragraph;
    }
    return false;
  },
  regExp: /^paragraph$/
};
