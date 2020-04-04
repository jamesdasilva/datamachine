import IObtainTypes from '../../../driven-port/i-obtain-types';

export default class AttributeGenerator {

  constructor(private obtainType: IObtainTypes) { }

  public generate(typeString: string): any {
    const typeName = this.extractName(typeString);
    const arrayParams = this.extractParams(typeString);
    return this.obtainType.get(typeName).generate(arrayParams);
  }

  public extractName(typeString: string): string {
    const regExpTypeName = /^[\w*]*/g;
    return typeString.match(regExpTypeName) + '';
  }

  public extractParams(typeString: string): string[] {
    if(/^regexp:\/*\//.test(typeString))
      return [typeString.split(':')[1]];
    const regExpParams = /:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+$/g
    const stringParams = (typeString.match(regExpParams) + '').slice(1);
    return stringParams.split(';');
  }
}
