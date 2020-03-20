var fs = require('fs');
import getFilePath from '../helpers/getFilePath';
import IResgitry from '../library/i-registry';

export default class JsonRegistry implements IResgitry {
  constructor() { }
	public write(data: any, dataFileName: string): boolean {
    try {
      var dataJson = JSON.stringify(data);
      var dataJsonWithNewline = this.replaceAll(dataJson, '},{','},\n{');
      fs.writeFileSync(`${dataFileName}.data.json`, dataJsonWithNewline, 'utf-8');
      return true;
    } catch {
      return false;
    }
  }
  public read(fileName) {
    const filePath = this.getFilePath(fileName);
    if (!fs.existsSync(filePath)) {
      return false;
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  public extract() {
    throw new Error("Method not implemented.");
  }
  public generateOutputFileName(options, inputFileName) {
    if(options.outName) {
      return options.outName;
    }
    return inputFileName.split('.')[0];
  }
  public getFilePath(fileName){
    const cwd: string = process.cwd();
    const barra = cwd.match(/\//) || cwd.match(/\\/);
    const barType: string = barra[0] as string;
    if(barType == '\\') {
      const fileNameWithBackslash = fileName.replace(/\//, '\\');
      return `${cwd}\\${fileNameWithBackslash}`;
    } else {
      const fileNameWithBar = fileName.replace(/\\/, '//');
      return `${cwd}/${fileNameWithBar}`;
    }
  };
  private replaceAll(_string, search, replacement) {
    var target = _string;
    return target.split(search).join(replacement);
  };
}

export function a (output, data, dataFileName) {
	switch(output){
		case 'json':
      var dataFileName = dataFileName.split('.');
      let jsonRegistry = new JsonRegistry();
      jsonRegistry.write(data, getFilePath(dataFileName[0]));
			break;
	}
};
