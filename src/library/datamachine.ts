import JsonRegistry from '../registry/json-registry';
import ArrayGenerator from '../domain/data-generation/array-generator';

export default class Datamachine {
  constructor(private log?: any) { }
  generate(schemaName: string, length: number = 5, options: any) {
    var output = 'json';
    var dataStructure = options.structure || 'array'; 
    switch(dataStructure){
      case 'array':
          const jsonRegistry = new JsonRegistry();
          this.log && this.log.putInfo('Carregando schema...');
          var schemas = jsonRegistry.read(schemaName);
          if(!schemas){
            this.log && this.log.putErro('Arquivo de schema não encontrado');
          } else {
            this.log && this.log.putSuccess('Schema carregado');
            this.log && this.log.putInfo('Gerando massa de dados...');
            var dataArray = new ArrayGenerator().generate(length, schemas.schema);
            if(!dataArray){
              this.log && this.log.putErro('Schema inválido!');
            } else {
              let fileName = jsonRegistry.generateOutputFileName(options, schemaName);
              this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
              const outSuccess = jsonRegistry.write(dataArray, fileName);
              if(!outSuccess){
                this.log && this.log.putErro('Não foi possível exportar os dados');
              } else {
                this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
              }
            }
          }
        break;
      default:
        this.log && this.log.putErro('Estrutura de dados desconhecida');
    }
  }
}