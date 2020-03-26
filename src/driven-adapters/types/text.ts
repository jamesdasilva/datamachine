var faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let text = faker.lorem.text();
      return text;
    }
    return false;
  },
  regExp: /^text$/
};
