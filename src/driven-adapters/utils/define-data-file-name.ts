export default class NameGenerator {
  constructor() { }
  extractNameInputFile(inputFileName: string) {
    return inputFileName.split('.')[0];
  }
  defineDataFileName(userName: string, inputFileName: string) {
    return userName 
      ? `${userName}.data` 
      : `${this.extractNameInputFile(inputFileName)}.data`;
  }
}