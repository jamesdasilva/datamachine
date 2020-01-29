var fs = require('fs');
var program = require('commander');

import generateOutput from './output-generator/generate-output';
import DataDesigner from './data-designer';
import getFilePath from './helpers/getFilePath';
import combineArraysOfObjects from './combine-arrays-of-objects';
import concatArraysOfObjects from './concat-arrays-of-objects';
import shuffleArraysOfObjects from './shuffle-arrays-of-objects';

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
  DataDesigner,
  getFilePath
);

exposeCombineCommand(
  program,
  generateOutput,
  combineArraysOfObjects,
  getFilePath
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
