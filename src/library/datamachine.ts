import JsonRegistry from '../registry/json-registry'
import ArrayGenerator from '../domain/data-generation/array-generator';

export default class Datamachine {
  constructor(private log?: any){ }
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
        }        
        this.log && this.log.putInfo('Gerando array de dados...');
        var dataArray = new ArrayGenerator().generate(length, schemas.schema);
        let fileName = jsonRegistry.generateOutputFileName(options, schemaName);
        this.log && this.log.putInfo('Gerando aquivo JSON com seu dados ;)');
        jsonRegistry.write(dataArray, fileName);
        break;
      default:
        this.log && this.log.putErro('Estrutura de dados desconhecida');
    }
  }
}