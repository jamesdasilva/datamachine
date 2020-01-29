var fs = require('fs');
import JsonGenerator from '../json-generator';
import getFilePath from '../helpers/getFilePath';

interface IOutput {
	generate(data, dataFileName);
	extract();
}

class JsonOutput implements IOutput {
  extract() {
    throw new Error("Method not implemented.");
  }
	constructor() { }
	generate(data, dataFileName) {
    var dataJson = JSON.stringify(data); // converte os dados em uma string json
    console.log('dataFileName ', dataFileName);
    var dataJsonWithNewline = this.replaceAll(dataJson, '},{','},\n{');
    fs.writeFile(dataFileName + ".json", dataJsonWithNewline, function(err) {
      if(err) {
        console.log(err);
        return false;
      } else {
        return true;
      }
    });
  }
  replaceAll(_string, search, replacement) {
    var target = _string;
    return target.split(search).join(replacement);
  };
}


export default function (output, data, dataFileName) {
	console.log('generator output', output, data, dataFileName);

	switch(output){
		case 'json':
      var dataFileName = dataFileName.split('.');
      let jsonOutput = new JsonOutput;
      jsonOutput.generate(data, getFilePath(dataFileName[0]));
			//JsonGenerator.setFile(data, getFilePath(dataFileName[0]));
			break;
	}
};
