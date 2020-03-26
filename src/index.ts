var program = require('commander');

import exposeGenerateCommand from './driver-adapters/CLI/generate-cmd-adapter';
import exposeCombineCommand from './driver-adapters/CLI/combine-cmd-adapter';
import exposeConcatCommand from './driver-adapters/CLI/concat-cmd-adapter';
import exposeShuffleCommand from './driver-adapters/CLI/shuffle-cmd-adapter';

program
  .version('1.2.0')
  .description('Datamachine é uma ferramenta para fabricar dados falsos e realistas')
  .on('--help', function(){
    console.log('')
    console.log('Command options:');
    console.log('  [command] --help                         para ver variações de comandos');
  });

exposeGenerateCommand();
exposeCombineCommand();
exposeConcatCommand();
exposeShuffleCommand();

program.parse(process.argv);
