var fs = require('fs');

export default (
  program,
  generateOutput,
  concatArraysOfObjects,
  getFilePath) => {

  program
    .command('concat <file1> <file2>')
    .alias('c')
    .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
    .option("--on, --outname <child>", "Definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('Concatenar duas massas diferentes gerando uma única massa de dados')
    .action((file1Name, file2Name, options) => {

      console.log(`Lendo o arquivo ${file1Name}...`);
      let file1Path = getFilePath(file1Name);
      let file1 = JSON.parse(fs.readFileSync(file1Path, 'utf-8'));

      console.log(`Lendo o arquivo ${file2Name}...`);
      let file2Path = getFilePath(file2Name);
      let file2 = JSON.parse(fs.readFileSync(file2Path, 'utf-8'));

      console.log(`Concatenando os dados...`);
      let concatenedArrays = concatArraysOfObjects(file1, file2);

      let output = 'json';

      let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

      let file1NameWithOutExtension;
      let file2NameWithOutExtension;
      let file1NameWithOutFolders;
      let file2NameWithOutFolders;

      if(fileNamePattern.test(file1Name)){
        file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
        file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
      }

      if(fileNamePattern.test(file1Name)){
        file2NameWithOutFolders = file2Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
        file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');
      }
      let outputName
      if(options.outname){
        outputName = options.outname
      }else{
        outputName = `${file1NameWithOutExtension[0]}-concatened-with-${file2NameWithOutExtension[0]}`;
      }

      console.log("Gerando arquivo de saída...");
      generateOutput(output, concatenedArrays, outputName);
    
    });

  };
