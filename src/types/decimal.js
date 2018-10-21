Object.prototype.getParams = function(type){
  var regExpParams = /:[\d|\w|;*]*$/g
  var stringParams = type.match(regExpParams) + '';
  if (stringParams != 'null') {
    stringParams = stringParams.slice(1);
    return stringParams.split(';');
  }
  return false;
}
function generate(type){
  if(this.test(type)){
    var params = this.getParams(type);
    var decimalPlaces = params[0] || 2;
    var min = params[1] || 0.00;
    var max = params[2] || 10000.00;
    var number;
    while(true){
      number = Math.random() * max;
      if(number > min) break;
    }
    return parseFloat(Number(number).toFixed(decimalPlaces)).toFixed(decimalPlaces);
  }
  return false;
}
function test(type){
  return this.regExp.test(type);
}
module.exports = {
    generate: generate,
    regExp: /^decimal:\d+;\d*\.?\d+;\d*\.?\d+$/,
    test: test
};
