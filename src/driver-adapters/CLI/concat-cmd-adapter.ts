import program = require('commander');
import ConcatData from "../../boundary/internal/user-cases/concat-data";
import Log from "./log";

export default () => {

  program
    .command('concat <file1> <file2>')
    .alias('c')
    .option("-N, --outname <child>", "definir nome do arquivo de saída. Ex.: --outname nome-do-arquivo")
    .description('concatenar duas massas diferentes gerando uma única massa de dados')
    .action((file1Name, file2Name, options) => {
      console.log('<< DATAMACHINE >>');
      new ConcatData(new Log()).exec(file1Name, file2Name, options);
    });
  };
