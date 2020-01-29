import getFilePath from "../helpers/getFilePath";

var fs = require('fs');

function getSchema (schemaName) {
  const schemaPath = getFilePath(schemaName);
  console.log('schemaPath ', schemaPath);
  if (!fs.existsSync(schemaPath)) {
    console.log('Arquivo de entrada não encontrado');
    return false;
  }
  return JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
}


export default function (
  program,
  generateOutput,
  DataDesigner) {

  program
  .command('generate <schemas> [length]')
  .alias('g')
  .option('--s, --structure <structure>", "Estrutura de dados: object, array, ou collection')
  .description('Gerar conjunto de dados')
  .action((schemaName, length, options) => {

    length = length || 5;
    var output = 'json';
    var dataStructure = options.structure || 'array';

    // pegar schema
    var schemas = getSchema(schemaName);
    // ------------

    // gerar 
    var accountConfig = schemaName;
    switch(dataStructure){
      case 'object':
        console.log('Generating object...');
        var obj = DataDesigner.generateObject(schemas);
        generateOutput(output, obj, accountConfig);
        break;
      case 'array':
        console.log('Generating array...');
        var arr = DataDesigner.generateArray(length, schemas.schema);
        generateOutput(output, arr, accountConfig);
        break;
      default:
        console.log('Estrutura de dados desconhecida');
    }
  });

};
