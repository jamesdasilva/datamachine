import JsonRegistry from '../../../driven-adapters/registry/json-registry';
import concatArraysOfObjects from '../domain/data-operator/concat-arrays-of-objects';

function fileNameIsValid(fileName){
  const fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;
  return fileNamePattern.test(fileName);
}

function createDefaultName(fileName1, fileName2){

  let file1NameWithOutExtension;
  let file2NameWithOutExtension;
  let file1NameWithOutFolders;
  let file2NameWithOutFolders;

  if(fileNameIsValid(fileName1)){
    file1NameWithOutFolders = fileName1.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
  }

  if(fileNameIsValid(fileName2)){
    file2NameWithOutFolders = fileName2.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');
  }

  return `concat-${file1NameWithOutExtension[0]}-${file2NameWithOutExtension[0]}`
}

export default class ConcatData {
  constructor(private log?: any) { }
  exec(file1Name, file2Name, options) {
    const { outname } = options;
    const jsonRegistry = new JsonRegistry();
    this.log && this.log.putInfo('Carregando schema 1 ...');
    const file1 = jsonRegistry.read(file1Name);
    if(!file1){
      this.log && this.log.putErro('Arquivo de schema 1 não encontrado');
    } else {
      this.log && this.log.putInfo('Carregando schema 2 ...');
      const file2 = jsonRegistry.read(file2Name);
      if(!file1){
        this.log && this.log.putErro('Arquivo de schema 2 não encontrado');
      } else {
        this.log && this.log.putInfo('Concatenando os dados...');
        const concatenedArrays = concatArraysOfObjects(file1, file2);
        const outputName = outname ? outname : createDefaultName(file1Name, file2Name);
        this.log && this.log.putInfo('Gerando arquivo de saída...');
        const outSuccess = jsonRegistry.write(concatenedArrays, outputName);
        if(!outSuccess){
          this.log && this.log.putErro('Não foi possível exportar os dados');
        } else {
          this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
        }
      }
    }
  }
}