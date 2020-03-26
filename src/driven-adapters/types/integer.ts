import getParams from '../../helpers/getParams';

module.exports = {
  generate: function (type){
    if(this.regExp.test(type)){
      var number;
      var params = getParams(type);
      var min = params[0], max = params[1];
      while(true){
        number = Math.floor(Math.random() * max);
        if(number > min) break;
      }
      return number;
    }
    return false;
  },
  regExp: /^integer:\d*;\d*$/
};
