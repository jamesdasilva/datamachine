faker = require('faker');

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      let title = faker.name.title();
      return title;
    }
    return false;
  },
  regExp: /^job$/
};
