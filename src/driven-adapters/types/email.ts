faker = require('faker');

module.exports = {
  generate: function (type: any): any{
    if(this.regExp.test(type)){
      let email = faker.internet.email();
      return email.toLocaleLowerCase();
    }
    return false;
  },
  regExp: /^email$/
};
