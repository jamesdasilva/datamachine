var program = require('commander');
import Datamachine from '../library/datamachine';
import Log from './log';

export default function () {
  program
  .command('generate <schemas> [length]')
  .alias('g')
  .option('-S, --structure <structure>", "Object, array, ou collection')
  .option('-N, --outName <outName>", "Nome do arquivo de saída')
  .description('Gerar massa de dados a partir de um schema')
  .action((schemaName, length, options) => {
    let datamachine = new Datamachine(new Log());
    datamachine.generate(schemaName, length, options);
  });
}
