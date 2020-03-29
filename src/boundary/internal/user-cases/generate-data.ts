import IWriteOutput from '../../driven-port/i-write-output';
import IReadInput from '../../driven-port/i-read-input';
import ArrayGenerator from '../domain/data-generator/array-generator';
import FileNameGenerator from '../../../driven-adapters/utils/file-name-generator';

export default class GenerateData {
  constructor(
    private writeOutput: IWriteOutput,
    private readInput: IReadInput,
    private fileNameGenerator: FileNameGenerator,
    private log?: any) { }

  exec(params: any) {
    const schemaName: string = params.schemaName;
    const length: number = params.length || 5;
    const options: any =  params.options;
    try {
      this.log && this.log.putInfo('Carregando schema...');
      const schemas = this.readInput.read(schemaName);
      this.log && this.log.putSuccess('Schema carregado');
      this.log && this.log.putInfo('Gerando massa de dados...');
      const dataArray = new ArrayGenerator().generate(length, schemas.schema);
      const fileName = this.fileNameGenerator.defineDataFileName(options.output, schemaName);
      this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
      this.writeOutput.write(dataArray, fileName);
      this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
    } catch(e) {
      this.log && this.log.putErro(e);
    }
  }
}