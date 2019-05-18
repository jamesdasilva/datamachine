const exposeAdaptToJSONServerCommand = (
  program,
  generateOutput,
  getFilePath) => {
  program
    .command('adapt-to-json-server <file>')
    .alias('2server')
    .option("--ep, --end-point-name <name>", "Definir nome do end point. Ex.: --end-point-name nome-do-end-point")
    .description('Adaptar coleção de dados para funcionar com json-server')
    .action((fileName, options) => {

      let output = 'json';

      console.log(`Lendo o arquivo ${fileName}...`);
      let filePath = getFilePath(fileName);
      let file = require(filePath);

      console.log("--------");

      let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;

      let fileNameWithOutFolders;
      let fileNameWithOutExtension;

      if(fileNamePattern.test(fileName)){
        fileNameWithOutFolders = fileName.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
        fileNameWithOutExtension = fileNameWithOutFolders[0].split('.');
      }

      console.log(fileNameWithOutExtension);

      let jsonServer;

      if(options.endPointName){
        jsonServer = {
          [options.endPointName]: file
        };
        generateOutput(output, jsonServer, options.endPointName);
      }else{
        jsonServer = {
          [fileNameWithOutExtension[0]]: file
        };
        generateOutput(output, jsonServer, `${fileNameWithOutExtension[0]}.server.json`);
      }

      
    
    });

};

module.exports = exposeAdaptToJSONServerCommand;