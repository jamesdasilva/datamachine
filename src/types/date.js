var getParams = require('../helpers/getParams');

function generate(type){
  if(this.regExp.test(type)){
    var ano;
    var params = getParams(type);
    var min = params[0] || 1970;
    var max = params[1] || new Date().getFullYear();
    while(true){
      ano = Math.floor(Math.random() * max);
      if(ano > min) break;
    }
    var mes = Math.floor(Math.random() * 12);
    var dia = Math.floor(Math.random() * 28);
    var hora = Math.floor(Math.random() * 24);
    var min = Math.floor(Math.random() * 60);
    var seg = Math.floor(Math.random() * 60);
    return new Date(ano, mes, dia, hora, min, seg, 0);
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^date:\d{4};\d{4}$/
};
