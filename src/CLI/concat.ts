import JsonRegistry from "../registry/json-registry";

var fs = require('fs');

function fileNameIsValid(fileName){
  const fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;
  return fileNamePattern.test(fileName);
}

function createDefaultName(fileName1, fileName2){

  let file1NameWithOutExtension;
  let file2NameWithOutExtension;
  let file1NameWithOutFolders;
  let file2NameWithOutFolders;

  if(fileNameIsValid(fileName1)){
    file1NameWithOutFolders = fileName1.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
  }

  if(fileNameIsValid(fileName2)){
    file2NameWithOutFolders = fileName2.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');
  }

  return `concat-${file1NameWithOutExtension[0]}-${file2NameWithOutExtension[0]}`
}

export default (
  program,
  generateOutput,
  concatArraysOfObjects,
  getFilePath) => {

  program
    .command('concat <file1> <file2>')
    .alias('c')
    .option("-N, --outname <child>", "definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('concatenar duas massas diferentes gerando uma única massa de dados')
    .action((file1Name, file2Name, options) => {
      const { outname } = options;
      const jsonRegistry = new JsonRegistry();
      console.log(`Lendo o arquivo ${file1Name}...`);
      const file1 = jsonRegistry.read(file1Name);
      console.log(`Lendo o arquivo ${file2Name}...`);
      const file2 = jsonRegistry.read(file2Name);
      console.log(`Concatenando os dados...`);
      const concatenedArrays = concatArraysOfObjects(file1, file2);
      const outputName = outname ? outname : createDefaultName(file1Name, file2Name);
      console.log("Gerando arquivo de saída...");
      jsonRegistry.write(concatenedArrays, outputName);
    });
  };
