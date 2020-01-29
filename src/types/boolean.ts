faker = require('faker');

module.exports = {
  generate: function (type: any) {
    if(this.regExp.test(type)){
      let boolean = faker.random.boolean();
      return boolean;
    }
    return false;
  },
  regExp: /^boolean$/
};
