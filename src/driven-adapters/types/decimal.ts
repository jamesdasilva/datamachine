import getParams from '../../helpers/getParams';

module.exports = {
    generate: function (type){
      if(this.regExp.test(type)){
        var params = getParams(type);
        var decimalPlaces = params[0] || 2;
        var min = params[1] || 0.00;
        var max = params[2] || 10000.00;
        var number;
        while(true){
          number = Math.random() * max;
          if(number > min) break;
        }
        return parseFloat(Number(number).toFixed(decimalPlaces));
      }
      return false;
    },
    regExp: /^decimal:\d+;\d*\.?\d+;\d*\.?\d+$/
};
