import IGenerateValue from './i-generate-value';

export default class EnumGen implements IGenerateValue {
  private regExp =
  /^enum:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+$/

  public generate(params: Array<any>): any {
      const index = Math.floor(Math.random() * (params && params.length));
      return params[index];
  }
  
  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
  