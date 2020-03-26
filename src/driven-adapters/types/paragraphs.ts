var faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let paragraphs = faker.lorem.paragraphs();
      return paragraphs;
    }
    return false;
  },
  regExp: /^paragraphs$/
};
