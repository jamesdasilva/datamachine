import getParams from '../helpers/getParams';

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      var params = getParams(type);
      var index = Math.floor(Math.random() * (params && params.length));
      return params[index];
    }
    return false;
  },
  regExp: /^enum:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+$/
};
  