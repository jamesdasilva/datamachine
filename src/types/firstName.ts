faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let firstName = faker.name.firstName();
      return firstName;
    }
    return false;
  },
  regExp: /^firstName$/
};
