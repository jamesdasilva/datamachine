import JsonRegistry from '../registry/json-registry';
import Datamachine from '../user-cases/datamachine';
import Log from './log';

export default (
  program,
  generateOutput,
  combineArraysOfObjects ) => {

  program
    .command('combine <file1> <file2>')
    .alias('c')
    .option("--chl, --child <child>", "Incluir o segundo objeto como um filho do primeiro, setando um nome para a chave. Ex.: --child nome-da-chave")
    .option("--on, --outname <child>", "Definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('Combinar objetos de duas coleções diferentes')
    .action((file1Name, file2Name, options) => {
      let datamachine = new Datamachine(new Log());
      console.log('<< DATAMACHINE >>');
      datamachine.combine(
        file1Name,
        file2Name,
        options
      );
    
    });

  };
