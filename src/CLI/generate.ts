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
  JsonOutput,
  ArrayGenerator) {

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
      case 'array':
        console.log('Generating array...');
        var arr = new ArrayGenerator().generate(length, schemas.schema);
        let fileName = accountConfig.split('.')[0];
        new JsonOutput().generate(arr, fileName);
        break;
      default:
        console.log('Estrutura de dados desconhecida');
    }
  });

};
