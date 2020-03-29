import combineArraysOfObjects from '../domain/data-operator/combine-arrays-of-objects';
import IWriteOutput from '../../driven-port/i-write-output';
import IReadInput from '../../driven-port/i-read-input';
import FileNameGenerator from '../../../driven-adapters/utils/file-name-generator';

export default class CombineData {
  constructor(
    private writeOutput: IWriteOutput,
    private readInput: IReadInput,
    private fileNameGenerator: FileNameGenerator,
    private log?: any) { }

  exec(file1Name, file2Name, options) {
    try {
      const { outname } = options;
      this.log && this.log.putInfo(`Carregando schema ${file1Name}`);
      const file1 = this.readInput.read(file1Name);
      this.log && this.log.putInfo(`Carregando schema ${file1Name}`);
      const file2 = this.readInput.read(file2Name);
      this.log && this.log.putInfo('Combinando os dados...');
      const combinedArrays = combineArraysOfObjects(file1, file2, options.child);
      const outputName = this.fileNameGenerator.defFileNameByTwoEntries(file1Name, file2Name, outname, 'combine');
      this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
      this.writeOutput.write(combinedArrays, outputName);
      this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
    } catch(e) {
      this.log && this.log.putErro(e);
    }
  }
}