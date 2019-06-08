var fs = require('fs');

const exposeGenerateCommand = (
  program,
  generateOutput,
  DataDesigner,
  getFilePath) => {

  program
  .command('generate <schemas> [length]')
  .alias('g')
  .option('--s, --structure <structure>", "Estrutura de dados: object, array, ou collection')
  .description('Gerar conjunto de dados')
  .action((schemaName, length, options) => {
  
    length = length || 5;
    var output = 'json';
    const schemaPath = getFilePath(schemaName);

    console.log('Schema path: ', schemaPath);
    
    if (!fs.existsSync(schemaPath)) {
      console.log('Arquivo de entrada não encontrado');
      return false;
    }
    var schemas = require(schemaPath);
    var output = 'json';
    var accountConfig = schemaName;
    var dataStructure = options.structure || 'array';

    switch(dataStructure){
      case 'object':
        console.log('Generating object...');
        var obj = DataDesigner.generateObject(schemas[0]);
        generateOutput(output, obj, accountConfig);
        break;
      case 'array':
        console.log('Generating array...');
        var arr = DataDesigner.generateArray(length, schemas);
        generateOutput(output, arr, accountConfig);
        break;
      case 'collection':
        console.log('Generating conllection...');
        var col = DataDesigner.generateCollection(length, schemas);
        generateOutput(output, col, accountConfig);
        break;
      default:
        console.log('Estrutura de dados desconhecida');
    }
  });

};

module.exports = exposeGenerateCommand;