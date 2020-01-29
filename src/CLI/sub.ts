export default (
  program,
  generateOutput,
  subObjectOfArraysOfObjects,
  getFilePath) => {

  program
    .command('sub <file1>')
    .description('Subtrair objetos de uma massa de dados')
    .action((file1Name, options) => {

      console.log(`Lendo o arquivo ${file1Name}...`);
      let file1Path = getFilePath(file1Name);
      let file1 = require(file1Path);

      console.log(`Embaralhando os dados...`);
      let newArray = subObjectOfArraysOfObjects(file1);

      let output = 'json';

      let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.tson$/;

      let file1NameWithOutExtension;
      let file1NameWithOutFolders;

      if(fileNamePattern.test(file1Name)){
        file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.tson$/);
        file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
      }

      let outputName
      if(options.outname){
        outputName = options.outname
      }else{
        outputName = `${file1NameWithOutExtension[0]}-shuffled`;
      }

      console.log("Gerando arquivo de saída...");
      generateOutput(output, newArray, outputName);
    
    });

  };
