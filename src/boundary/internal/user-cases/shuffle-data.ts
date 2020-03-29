import shuffleArraysOfObjects from '../domain/data-operator/shuffle-arrays-of-objects';
import IWriteOutput from '../../driven-port/i-write-output';
import IReadInput from '../../driven-port/i-read-input';
import FileNameGenerator from '../../../driven-adapters/utils/file-name-generator';

export default class ShuffleData {
  constructor(
    private writeOutput: IWriteOutput,
    private readInput: IReadInput,
    private fileNameGenerator: FileNameGenerator,
    private log?: any) { }

  exec(file1Name, options) {
    try {
      this.log && this.log.putInfo(`Carregando dados ${file1Name}`);
      const file1 = this.readInput.read(file1Name);
      this.log && this.log.putInfo('Embaralhando os dados...');
      const shuffledArrays = shuffleArraysOfObjects(file1);
      const outputName = this.fileNameGenerator.defFileNameByOneEntry(file1Name, options.output, 'shuffle');
      this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
      this.writeOutput.write(shuffledArrays, outputName);
      this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
    } catch(e) {
      this.log && this.log.putErro(e);
    }
  }
}