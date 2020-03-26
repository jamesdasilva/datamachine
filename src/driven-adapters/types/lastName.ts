faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let lastName = faker.name.lastName();
      return lastName;
    }
    return false;
  },
  regExp: /^lastName$/
};
