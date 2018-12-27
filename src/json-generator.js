var fs = require('fs');

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

var setFile = function(data, dataFileName){
  var dataJson = JSON.stringify(data); // converte os dados em uma string json
  dataJsonWithNewline = dataJson.replaceAll(',',',\n');
  fs.writeFile(dataFileName + ".json", dataJsonWithNewline, function(err) {
    if(err) {
      console.log(err);
      return false;
    } else {
      console.log("The file was saved!");
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

module.exports = {
  setFile: setFile,
  getFile: getFile
};