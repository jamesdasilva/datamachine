export default class FileNameGenerator {
  constructor() { }
  extractNameInputFile(inputFileName: string) {
    return inputFileName.split('.')[0];
  }
  defineDataFileName(userName: string, inputFileName: string) {
    return userName 
      ? `${userName}.data` 
      : `${this.extractNameInputFile(inputFileName)}.data`;
  }
  fileNameIsValid(fileName) {
    const fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+/;
    return fileNamePattern.test(fileName);
  }
  defFileNameByTwoEntries(fileName1, fileName2, userName = '', prefix = '', posfix = '') {
    if(userName !== '') return `${prefix}-${userName}-${posfix}.data`;
    if(this.fileNameIsValid(fileName1) && this.fileNameIsValid(fileName2)) {
        const __fileName1 = fileName1.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
        const __fileName2 = fileName2.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
        const __prefix = prefix ? prefix + '-' : '';
        const __posfix = posfix ? '-' + posfix : '';
        return `${__prefix}${__fileName1[0].split('.')[0]}-${__fileName2[0].split('.')[0]}${__posfix}.data`;
      }
  }
  defFileNameByOneEntry({
    fileName, userName = '', prefix = '', posfix = ''}) {
    if(userName !== '') return `${prefix}-${userName}-${posfix}.data`;
    if(this.fileNameIsValid(fileName)) return `${prefix}-${fileName}-${posfix}.data`;
  }
}