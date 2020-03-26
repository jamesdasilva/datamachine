export default class OutputFileNameGenerator {
  public fileNameIsValide(fileName){
    let fileNamePattern = /^([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+\/)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+.json$/;
    return fileNamePattern.test(fileName);
  }
  public generate(fileName, options, command) {
    if(options.outname) return `${options.outname}`;
    
    let fileNameWithOutExtension;
    let fileNameWithoutFolders;

    if(this.fileNameIsValide(fileName)){
      fileNameWithoutFolders = fileName.match(/[\w\d À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+.json$/);
      fileNameWithOutExtension = fileNameWithoutFolders[0].split('.');
    }

    return options.outname 
      ? options.outname 
      : `${command ? command : `shuffle-${fileNameWithOutExtension[0]}`}--${fileNameWithOutExtension[0]}`
  }
}