#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

var generateOutput = require('./src/generate-output');
var DataDesigner = require('./src/data-designer');
var getFilePath = require('./src/helpers/getFilePath');

program
  .version('1.0.1')
  .description('O Datamachine é uma ferramenta CLI para fabricar dados falsos');

program
  .command('generate <molds> [length]')
  .alias('g')
  .option("--s, --structure <structure>", "Estrutura de dados: object, array, ou collection")
  .description('Gerar conjunto de dados')
  .action((moldFileName, length, options) => {
    
    var length = length || 5;
    var moldFilePath = getFilePath(moldFileName);

    console.log(moldFilePath);
    
    if (!fs.existsSync(moldFilePath)) {
			console.log('Arquivo de entrada não encontrado');
			return false;
    }
    var molds = require(moldFilePath);
    var output = 'json';
    var accountConfig = false;
    var dataStructure = options.structure || 'array';

    switch(dataStructure){
			case 'object':
				var obj = DataDesigner.generateObject(molds[0]);
				generateOutput(output, obj, accountConfig);
				break;
			case 'array':
				var arr = DataDesigner.generateArray(length, molds);
				generateOutput(output, arr, accountConfig);
				break;
			case 'collection':
				var col = DataDesigner.generateCollection(length, molds);
				generateOutput(output, col, accountConfig);
				break;
			default:
				console.log('Estrutura de dados desconhecida');
    }
  });

program.parse(process.argv);

