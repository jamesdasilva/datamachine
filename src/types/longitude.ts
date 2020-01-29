faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let longitude = faker.address.longitude();
      return longitude;
    }
    return false;
  },
  regExp: /^longitude$/
};
