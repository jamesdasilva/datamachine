import JsonRegistry from '../../../driven-adapters/registry/json-registry';
import shuffleArraysOfObjects from '../domain/data-operator/shuffle-arrays-of-objects';
import OutputFileNameGenerator from '../../../helpers/output-file-name-generator';

export default class ShuffleData {
  constructor(private log?: any) { }
  exec(file1Name, options) {
    const jsonRegistry = new JsonRegistry();
    console.log(`Lendo o arquivo ${file1Name}...`);
    let file1 = jsonRegistry.read(file1Name);

    console.log(`Embaralhando os dados...`);
    let shuffledArrays = shuffleArraysOfObjects(file1);

    let outputName = options.outname ? options.outname : new OutputFileNameGenerator().generate(file1Name, options, 'shuffle');

    console.log("Gerando arquivo de saída...");
    const outSuccess = jsonRegistry.write(shuffledArrays, outputName);
    console.log('>--', outSuccess);
  }
}