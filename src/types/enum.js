var getParams = require('../helpers/getParams');

function generate(type){
    if(this.regExp.test(type)){
      var params = getParams(type);
			var index = Math.floor(Math.random() * params.length);
			return params[index];
    }
    return false;
  }
  
  module.exports = {
    generate: generate,
    regExp: /^enum:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+$/
  };
  