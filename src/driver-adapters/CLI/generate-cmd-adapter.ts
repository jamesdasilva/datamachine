import program = require('commander');
import Log from '../../driven-adapters/log/log';
import GenerateData from '../../boundary/internal/user-cases/generate-data';

export default function () {
  program
  .command('generate <schemas> [length]')
  .alias('g')
  .option('-S, --structure <structure>", "array ou collection')
  .option('-N, --outName <outName>", "nome do arquivo de saída')
  .description('gerar massa de dados a partir de um schema')
  .action((schemaName, length, options) => {
    console.log('<< DATAMACHINE >>');
    new GenerateData(new Log()).exec(
      schemaName,
      length,
      options
    );
  });
}
