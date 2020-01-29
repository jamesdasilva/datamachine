var RandExp = require('randexp');
  
module.exports = {
    generate: function (type){
        return new RandExp(new RegExp(type)).gen();
    }
};