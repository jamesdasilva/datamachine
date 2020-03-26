import program = require('commander');
import Log from '../../driven-adapters/log/log';
import ShuffleData from '../../boundary/internal/user-cases/shuffle-data';

export default function () {
  program
  .command('shuffle <file1>')
  .alias('shu')
  .description('embaralhar os objetos de uma massa de dados')
  .option("--on, --outname <outname>", "definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
  .action((file1Name, options) => {
    console.log('<< DATAMACHINE >>');
    new ShuffleData(new Log()).exec(file1Name, options);
  });
};