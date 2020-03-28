import ArrayGenerator from '../domain/data-generator/array-generator';
import IWriteOutput from '../../driven-port/i-write-output';
import IReadInput from '../../driven-port/i-read-input';
import NameGenerator from '../../../driven-adapters/utils/define-data-file-name';

export default class GenerateData {
  constructor(
    private writeOutput: IWriteOutput,
    private readInput: IReadInput,
    private nameGenerator: NameGenerator,
    private log?: any) { }
  exec(params: any) {
    const schemaName: string = params.schemaName;
    const length: number = params.length || 5;
    const options: any =  params.options;
    try {
      this.log && this.log.putInfo('Carregando schema...');
      var schemas = this.readInput.read(schemaName);
      this.log && this.log.putSuccess('Schema carregado');
      this.log && this.log.putInfo('Gerando massa de dados...');
      var dataArray = new ArrayGenerator().generate(length, schemas.schema);
      let fileName = this.nameGenerator.defineDataFileName(options.output, schemaName);
      this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
      this.writeOutput.write(dataArray, fileName);
      this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
    } catch(e) {
      this.log && this.log.putErro(e);
    }
  }
}