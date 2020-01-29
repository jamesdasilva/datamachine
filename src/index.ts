var fs = require('fs');
var program = require('commander');

import generateOutput from './output-generator/json-output';
import DataDesigner from './domain/data-generation/data-designer';
import getFilePath from './helpers/getFilePath';
import combineArraysOfObjects from './domain/data-operations/combine-arrays-of-objects';
import concatArraysOfObjects from './domain/data-operations/concat-arrays-of-objects';
import shuffleArraysOfObjects from './domain/data-operations/shuffle-arrays-of-objects';

import exposeGenerateCommand from './CLI/generate';
import exposeCombineCommand from './CLI/combine';
import exposeConcatCommand from './CLI/concat';
import exposeShuffleCommand from './CLI/shuffle';

program
  .version('1.2.0')
  .description('O Datamachine é uma ferramenta CLI para fabricar dados falsos');

exposeGenerateCommand(
  program,
  generateOutput,
  DataDesigner
);

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
