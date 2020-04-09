import program = require('commander');
import Log from '../../driven-adapters/log/log';
import JsonRegistry from '../../driven-adapters/registry/json-registry';
import GenerateData from '../../boundary/internal/user-cases/generate-data';
import FileNameGenerator from '../../driven-adapters/utils/file-name-generator';

export default function () {
  program
  .command('generate <schemas> [length]')
  .alias('gn')
  .option('-N, --outname <outname>", "nome do arquivo de saída')
  .description('gerar massa de dados a partir de um schema')
  .action((schemaName, length, options) => {
    console.log('<< DATAMACHINE >>');
    new GenerateData(
      new JsonRegistry(),
      new JsonRegistry(),
      new FileNameGenerator(),
      new Log()
      ).exec({
        schemaName,
        length,
        options
      });
  });
}
