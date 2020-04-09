import program = require('commander');
import Log from '../../driven-adapters/log/log';
import ShuffleData from '../../boundary/internal/user-cases/shuffle-data';
import JsonRegistry from '../../driven-adapters/registry/json-registry';
import FileNameGenerator from '../../driven-adapters/utils/file-name-generator';

export default function () {
  program
  .command('shuffle <file1>')
  .alias('sf')
  .description('embaralhar os objetos de uma massa de dados')
  .option("-N, --outname <outname>", "definir nome do arquivo de saída. ex.: --outname nome-do-arquivo")
  .action((file1Name, options) => {
    console.log('<< DATAMACHINE >>');
    new ShuffleData(
      new JsonRegistry(),
      new JsonRegistry(),
      new FileNameGenerator(),
      new Log()).exec(file1Name, options);
  });
};