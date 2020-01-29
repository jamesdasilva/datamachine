var fs = require('fs');

var replaceAll = function(_string, search, replacement) {
  var target = _string;
  return target.split(search).join(replacement);
};

var setFile = function(data, dataFileName){
  var dataJson = JSON.stringify(data); // converte os dados em uma string json
  console.log('dataFileName ', dataFileName);
  var dataJsonWithNewline = replaceAll(dataJson, '},{','},\n{');
  fs.writeFile(dataFileName + ".json", dataJsonWithNewline, function(err) {
    if(err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });
};
var getFile = function(){
  fs.readFile('./data.json', function(err, data){
    if(err){
      console.log("Erro ao ler arquivo");
      return false;
    }
    var dataJson = JSON.parse(data); // faz o parse da string json
    return dataJson;
  });
};

export default {
  setFile: setFile,
  getFile: getFile
};