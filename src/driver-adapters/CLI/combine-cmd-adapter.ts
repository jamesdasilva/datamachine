import program = require('commander');
import Log from '../../driven-adapters/log/log';
import CombineData from '../../boundary/internal/user-cases/combine-data';

export default () => {
  program
    .command('combine <file1> <file2>')
    .alias('c')
    .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
    .option("--on, --outname <child>", "Definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('Combinar objetos de duas coleções diferentes')
    .action((file1Name, file2Name, options) => {
      console.log('<< DATAMACHINE >>');
      new CombineData(new Log()).exec(
        file1Name,
        file2Name,
        options
      );
    });
  };
