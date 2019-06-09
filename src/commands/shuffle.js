const exposeShuffleCommand = (
    program,
    generateOutput,
    shuffleArraysOfObjects,
    getFilePath) => {
  
    program
      .command('shuffle <file1>')
      .alias('shu')
      .description('Embaralhar os objetos de uma massa de dados')
      .action((file1Name, options) => {
  
        console.log(`Lendo o arquivo ${file1Name}...`);
        let file1Path = getFilePath(file1Name);
        let file1 = require(file1Path);
  
        console.log(`Embaralhando os dados...`);
        let shuffledArrays = shuffleArraysOfObjects(file1);
  
        let output = 'json';
  
        let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;
  
        let file1NameWithOutExtension;
        let file1NameWithOutFolders;
  
        if(fileNamePattern.test(file1Name)){
          file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
          file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
        }
  
        let outputName
        if(options.outname){
          outputName = options.outname
        }else{
          outputName = `${file1NameWithOutExtension[0]}-shuffled`;
        }
  
        console.log("Gerando arquivo de saída...");
        generateOutput(output, shuffledArrays, outputName);
      
      });
  
    };
  
  module.exports = exposeShuffleCommand;