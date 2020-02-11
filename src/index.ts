var program = require('commander');

import generateOutput from "./registry/json-registry";
import getFilePath from './helpers/getFilePath';
import combineArraysOfObjects from './domain/data-operations/combine-arrays-of-objects';
import concatArraysOfObjects from './domain/data-operations/concat-arrays-of-objects';
import shuffleArraysOfObjects from './domain/data-operations/shuffle-arrays-of-objects';

import exposeGenerateCommand from './CLI/generate.command';
import exposeCombineCommand from './CLI/combine';
import exposeConcatCommand from './CLI/concat';
import exposeShuffleCommand from './CLI/shuffle';

program
  .version('1.2.0')
  .description('Datamachine é uma ferramenta para fabricar dados falsos e realistas')
  .on('--help', function(){
    console.log('')
    console.log('Command options:');
    console.log('  [command] --help                         para ver variações de comandos');
  });

exposeGenerateCommand();

exposeCombineCommand(
  program,
  generateOutput,
  combineArraysOfObjects
);

exposeConcatCommand(
  program,
  generateOutput,
  concatArraysOfObjects,
  getFilePath
);

exposeShuffleCommand(
  program,
  generateOutput,
  shuffleArraysOfObjects,
  getFilePath
);

program.parse(process.argv);
