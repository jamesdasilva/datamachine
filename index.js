#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

var generateOutput = require('./src/generate-output');
var DataDesigner = require('./src/data-designer');
var getFilePath = require('./src/helpers/getFilePath');
var combineArraysOfObjects = require('./src/combine-arrays-of-objects');

program
  .version('1.1.0')
  .description('O Datamachine é uma ferramenta CLI para fabricar dados falsos');

program
  .command('generate <molds> [length]')
  .alias('g')
  .option("--s, --structure <structure>", "Estrutura de dados: object, array, ou collection")
  .description('Gerar conjunto de dados')
  .action((moldFileName, length, options) => {
    
    var length = length || 5;
    var moldFilePath = getFilePath(moldFileName);

    console.log("Schema path: ", moldFilePath);
    
    if (!fs.existsSync(moldFilePath)) {
			console.log('Arquivo de entrada não encontrado');
			return false;
    }
    var molds = require(moldFilePath);
    var output = 'json';
    var accountConfig = moldFileName;
    var dataStructure = options.structure || 'array';

    switch(dataStructure){
      case 'object':
        console.log("Generating object...");
				var obj = DataDesigner.generateObject(molds[0]);
				generateOutput(output, obj, accountConfig);
				break;
      case 'array':
        console.log("Generating array...");
				var arr = DataDesigner.generateArray(length, molds);
				generateOutput(output, arr, accountConfig);
				break;
      case 'collection':
        console.log("Generating conllection...");
				var col = DataDesigner.generateCollection(length, molds);
				generateOutput(output, col, accountConfig);
				break;
			default:
				console.log('Estrutura de dados desconhecida');
    }
  });

  program
  .command('combine <file1> <file2>')
  .alias('c')
  .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
  .option("--on, --outname <child>", "Definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
  .description('Combinar objetos de duas coleções diferentes')
  .action((file1Name, file2Name, options) => {

    console.log(`Lendo o arquivo ${file1Name}...`);
    let file1Path = getFilePath(file1Name);
    let file1 = require(file1Path);

    console.log(`Lendo o arquivo ${file2Name}...`);
    let file2Path = getFilePath(file2Name);
    let file2 = require(file2Path);

    console.log(`Combinando os dados...`);
    let combinedArrays = combineArraysOfObjects(file1, file2, options.child);

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
      outputName = `${file1NameWithOutExtension[0]}-combined-with-${file2NameWithOutExtension[0]}`;
    }

    console.log("Gerando arquivo de saída...");
    generateOutput(output, combinedArrays, outputName);
  
  });

  program
  .command('adapt-to-json-server <file>')
  .alias('2server')
  .option("--ep, --end-point-name <name>", "Definir nome do end point. Ex.: --end-point-name nome-do-end-point")
  .description('Adaptar coleção de dados para funcionar com json-server')
  .action((fileName, options) => {

    let output = 'json';

    console.log(`Lendo o arquivo ${fileName}...`);
    let filePath = getFilePath(fileName);
    let file = require(filePath);

    console.log("--------");

    let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

    let fileNameWithOutFolders;
    let fileNameWithOutExtension;

    if(fileNamePattern.test(fileName)){
      fileNameWithOutFolders = fileName.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
      fileNameWithOutExtension = fileNameWithOutFolders[0].split('.');
    }

    console.log(fileNameWithOutExtension);

    let jsonServer;

    if(options.endPointName){
      jsonServer = {
        [options.endPointName]: file
      };
      generateOutput(output, jsonServer, options.endPointName);
    }else{
      jsonServer = {
        [fileNameWithOutExtension[0]]: file
      };
      generateOutput(output, jsonServer, `${fileNameWithOutExtension[0]}.server.json`);
    }

    
  
  });

program.parse(process.argv);

