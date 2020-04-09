import program = require('commander');
import Log from '../../driven-adapters/log/log';
import CombineData from '../../boundary/internal/user-cases/combine-data';
import JsonRegistry from '../../driven-adapters/registry/json-registry';
import FileNameGenerator from '../../driven-adapters/utils/file-name-generator';

export default () => {
  program
    .command('combine <file1> <file2>')
    .alias('cb')
    .option("-C, --child <child>", "incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
    .option("-N, --outname <outname>", "definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('combinar objetos de duas coleções diferentes')
    .action((file1Name, file2Name, options) => {
      console.log('<< DATAMACHINE >>');
      new CombineData(
        new JsonRegistry(),
        new JsonRegistry(),
        new FileNameGenerator(),
        new Log()).exec(
        file1Name,
        file2Name,
        options
      );
    });
  };
