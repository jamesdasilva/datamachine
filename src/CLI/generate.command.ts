import program = require('commander');
import Datamachine from '../library/datamachine';
import Log from './log';

export default function () {
  program
  .command('generate <schemas> [length]')
  .alias('g')
  .option('-S, --structure <structure>", "Object, array, ou collection')
  .option('-N, --outName <outName>", "Nome do arquivo de saída')
  .description('gerar massa de dados a partir de um schema')
  .action((schemaName, length, options) => {
    let datamachine = new Datamachine(new Log());
    console.log('<< DATAMACHINE >>');
    datamachine
      .generate(
        schemaName,
        length,
        { 
          structure: options.structure,
          outName: options.outName
        }
      );
  });
}
