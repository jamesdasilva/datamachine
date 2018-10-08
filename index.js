#!/usr/bin/env node

var generateOutput = require('./src/generate-output');
var DataDesigner = require('./src/data-designer');

var fs = require('fs');
var program = require('commander');

/*
decimal:4;20;40
bool
integer:10;100
date:2015;2017
word:5
text:50
id
*/

program
  .version('0.0.1')
  .description('Esta máquina fabrica de dados falsos para preencher programas JavaScript. A estrutura dos dados é definida em objetos molds');

program
  .command('generate <molds> [length]')
  .alias('g')
  .option("--o, --output <output>", "Formato de saída: json ou firestore")
  .option("--c, --account-config <accountConfig>", "Configuração do Cloud Firestore")
  .option("--s, --structure <structure>", "Estrutura de dados: object, array, ou collection")
  .description('Gerar e persistir conjunto de dados')
  .action((molds, length, options) => {
    
    var length = length || 5;
    var moldsFile = `${process.cwd()}/${molds}`;
    
    if (!fs.existsSync(moldsFile)) {
        console.log('Arquivo de entrada não encontrado');
        return false;
    }
    var molds = require(moldsFile);
    var output = options.output || 'json';
    var accountConfig = options.accountConfig || false;
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

