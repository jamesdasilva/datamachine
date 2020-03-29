import concatArraysOfObjects from '../domain/data-operator/concat-arrays-of-objects';
import FileNameGenerator from '../../../driven-adapters/utils/file-name-generator';
import IWriteOutput from '../../driven-port/i-write-output';
import IReadInput from '../../driven-port/i-read-input';

export default class ConcatData {
  constructor(
    private writeOutput: IWriteOutput,
    private readInput: IReadInput,
    private fileNameGenerator: FileNameGenerator,
    private log?: any) { }

  exec(file1Name, file2Name, options) {
    const { outname } = options;
    try {
      this.log && this.log.putInfo(`Carregando schema ${file1Name}`);
      const file1 = this.readInput.read(file1Name);
      this.log && this.log.putInfo(`Carregando schema ${file2Name}`);
      const file2 = this.readInput.read(file2Name);
      this.log && this.log.putInfo('Concatenando os dados...');
      const concatenedArrays = concatArraysOfObjects(file1, file2);
      const outputName = this.fileNameGenerator.defFileNameByTwoEntries(file1Name, file2Name, outname, 'concat');
      this.log && this.log.putInfo('Gerando arquivo de saída...');
      this.writeOutput.write(concatenedArrays, outputName);
      this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
    } catch(e) {
      this.log && this.log.putErro(e);
    }
  }
}