import JsonRegistry from '../../../driven-adapters/registry/json-registry';
import combineArraysOfObjects from '../domain/data-operator/combine-arrays-of-objects';

function generateOutputFileName (file1Name, file2Name, options) {
  let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

  let file1NameWithOutExtension;
  let file2NameWithOutExtension;
  let file1NameWithOutFolders;
  let file2NameWithOutFolders;

  if(fileNamePattern.test(file1Name)) {
    file1NameWithOutFolders = file1Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file1NameWithOutExtension = file1NameWithOutFolders[0].split('.');
  }

  if(fileNamePattern.test(file1Name)) {
    file2NameWithOutFolders = file2Name.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
    file2NameWithOutExtension = file2NameWithOutFolders[0].split('.');
  }
  let outputName
  if(options.outname) {
    outputName = options.outname
  } else {
    outputName = `${file1NameWithOutExtension[0]}-combined-with-${file2NameWithOutExtension[0]}`;
  }
  return outputName;
}

export default class CombineData {
  constructor(private log?: any) { }
  exec(file1Name, file2Name, options) {
    const jsonRegistry = new JsonRegistry();
    this.log && this.log.putInfo('Carregando schema...');
    var file1 = jsonRegistry.read(file1Name);
    if(!file1){
      this.log && this.log.putErro('Arquivo de schema não encontrado');
    } else {
      var file2 = jsonRegistry.read(file2Name);
      if(!file2){
        this.log && this.log.putErro('Arquivo de schema não encontrado');
      } else {
        this.log && this.log.putInfo('Combinando os dados...');
        let combinedArrays = combineArraysOfObjects(file1, file2, options.child);
        let outputName = generateOutputFileName(file1Name, file2Name, options);
        this.log && this.log.putInfo('Exportando dados para um arquivo ;)');
        const outSuccess = jsonRegistry.write(combinedArrays, outputName);
        if(!outSuccess){
          this.log && this.log.putErro('Não foi possível exportar os dados');
        } else {
          this.log && this.log.putSuccess('Pronto! Seus dados foram gerados com sucesso!');
        }
      }
    }
  }
}