var fs = require('fs');
import getFilePath from '../helpers/getFilePath';
import IOutput from './i-output'

class JsonOutput implements IOutput {
  constructor() { }
	public generate(data: any, dataFileName: string): boolean {
    try {
      var dataJson = JSON.stringify(data);
      var dataJsonWithNewline = this.replaceAll(dataJson, '},{','},\n{');
      return !!fs.writeFileSync(dataFileName + ".json", dataJsonWithNewline, 'utf-8');
    } catch {
      console.log('ERRO ao gerar arquivo de saída');
      return false;
    }
  }
  public extract() {
    throw new Error("Method not implemented.");
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
			break;
	}
};
