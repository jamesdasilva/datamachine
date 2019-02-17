var RandExp = require('randexp');

function generate(type){
    return new RandExp(new RegExp(type)).gen();
}
  
module.exports = {
    generate: generate
};