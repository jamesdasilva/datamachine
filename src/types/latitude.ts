faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let latitude = faker.address.latitude();
      return latitude;
    }
    return false;
  },
  regExp: /^latitude$/
};
