import program = require('commander');
import ConcatData from "../../boundary/internal/user-cases/concat-data";
import Log from "../../driven-adapters/log/log";
import JsonRegistry from '../../driven-adapters/registry/json-registry';
import FileNameGenerator from '../../driven-adapters/utils/file-name-generator';

export default () => {

  program
    .command('concat <file1> <file2>')
    .alias('cc')
    .option("-N, --outname <outname>", "definir nome do arquivo de saída. ex.: --outname nome-do-arquivo")
    .description('concatenar duas massas diferentes gerando uma única massa de dados')
    .action((file1Name, file2Name, options) => {
      console.log('<< DATAMACHINE >>');
      new ConcatData(
        new JsonRegistry(),
        new JsonRegistry(),
        new FileNameGenerator(),
        new Log()
        ).exec(file1Name, file2Name, options);
    });
  };
