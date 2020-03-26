var faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let word = faker.lorem.word();
      return word;
    }
    return false;
  },
  regExp: /^word$/
};
