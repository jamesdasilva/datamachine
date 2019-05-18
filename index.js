#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

var generateOutput = require('./src/generate-output');
var DataDesigner = require('./src/data-designer');
var getFilePath = require('./src/helpers/getFilePath');
var combineArraysOfObjects = require('./src/combine-arrays-of-objects');

const exposeGenerateCommand = require('./src/commands/generate');
const exposeCombineCommand = require('./src/commands/combine');
const exposeAdaptToJSONServerCommand = require('./src/commands/adapt-to-json-server');

program
  .version('1.1.0')
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

exposeAdaptToJSONServerCommand(
  program,
  generateOutput,
  getFilePath
);
  

program.parse(process.argv);

