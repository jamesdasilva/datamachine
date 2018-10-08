var gerarObjeto = require('./generate-object');
var gerarId = require('./types/id');

function generateCollection(tamanho, molds){
  var result = {}, indexMold;
  for(k = 0; k < tamanho; k++){
    indexMold = Math.floor(Math.random() * molds.length);
    result[gerarId()] = gerarObjeto(molds[indexMold]);
  }
  return result;
}

module.exports = generateCollection;
