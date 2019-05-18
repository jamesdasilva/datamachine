var fs = require('fs');

const exposeGenerateCommand = (
  program,
  generateOutput,
  DataDesigner,
  getFilePath) => {

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

};

module.exports = exposeGenerateCommand;