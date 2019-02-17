#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

var generateOutput = require('./src/generate-output');
var DataDesigner = require('./src/data-designer');
var combineObjects = require('./src/combine-objects');
var getFilePath = require('./src/helpers/getFilePath');
var generateRandomNumber = require('./src/helpers/generateRandomNumber');
var raffleObject = require('./src/helpers/raffle-object');
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
  .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nomeDaChave")
  .description('Combinar objetos de duas coleções diferentes')
  .action((file1Name, file2Name, options) => {

    let file1Path = getFilePath(file1Name);
    let file1 = require(file1Path);

    let file2Path = getFilePath(file2Name);
    let file2 = require(file2Path);

    let combinedArrays = combineArraysOfObjects(file1, file2, options.child);

    let output = 'json';

    let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

    let file1NameWithOutExtension;
    let file2NameWithOutExtension;
    let file1NameWithOutFolders;
    let file2NameWithOutFolders;

    if(fileNamePattern.test(file1Name)){
      file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);

      console.log(file1NameWithOutFolders);

      file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');

      console.log(file1NameWithOutExtension);
    }

    

    if(fileNamePattern.test(file1Name)){
      file2NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);

      console.log(file2NameWithOutFolders);

      file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');

      console.log(file2NameWithOutExtension);
    }

    let outputName = `${file1NameWithOutExtension[0]}CombinedWith${file2NameWithOutExtension[0]}`;
    //let outputName = 'outputName';

    generateOutput(output, combinedArrays, outputName);
  
  });

program.parse(process.argv);

