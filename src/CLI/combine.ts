import fs from 'fs';
import getFilePath from "../helpers/getFilePath";

function extractDataMass (fileName) {
  let filePath = getFilePath(fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function generateOutputFileName (file1Name, file2Name, options) {
  let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

  let file1NameWithOutExtension;
  let file2NameWithOutExtension;
  let file1NameWithOutFolders;
  let file2NameWithOutFolders;

  if(fileNamePattern.test(file1Name)) {
    file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
  }

  if(fileNamePattern.test(file1Name)) {
    file2NameWithOutFolders = file2Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');
  }
  let outputName
  if(options.outname) {
    outputName = options.outname
  } else {
    outputName = `${file1NameWithOutExtension[0]}-combined-with-${file2NameWithOutExtension[0]}`;
  }
  return outputName;
}

export default (
  program,
  generateOutput,
  combineArraysOfObjects ) => {

  program
    .command('combine <file1> <file2>')
    .alias('c')
    .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
    .option("--on, --outname <child>", "Definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('Combinar objetos de duas coleções diferentes')
    .action((file1Name, file2Name, options) => {

      console.log(`Lendo o arquivo ${file1Name}...`);
      let file1 = extractDataMass(file1Name);

      console.log(`Lendo o arquivo ${file2Name}...`);
      let file2 = extractDataMass(file2Name);

      console.log(`Combinando os dados...`);
      let combinedArrays = combineArraysOfObjects(file1, file2, options.child);

      console.log("Gerando arquivo de saída...");
      /* JSON ou CSV (em breve) */
      let outputType = 'json';
      let outputName = generateOutputFileName(file1Name, file2Name, options);
      generateOutput(outputType, combinedArrays, outputName);
    
    });

  };
