import IObtainTypes from '../../../driven-port/i-obtain-types';

export default class AttributeGenerator {
  private typesRegistry: any;

  constructor(typesRegistry: IObtainTypes) { 
    this.typesRegistry = typesRegistry;
  }

  generate(typeString) {
    const typeObject = this.extractTypeObject(typeString);
    return this.typesRegistry.get(typeObject.name).generate(typeObject.params);
  }

  private extractTypeObject(typeString: string) {
    const regExpTypeName = /^[\w*]*/g;
    const typeName = typeString.match(regExpTypeName) + '';
    if(/^regexp:\/*\//.test(typeString)) {
      return {
        name: typeName,
        params: [typeString.split(':')[1]]
      }
    }
    const regExpParams = /:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º\/\[\]]+$/g
    const stringParams = (typeString.match(regExpParams) + '').slice(1);
    const arrayParams = stringParams.split(';');
    return {
      name: typeName,
      params: arrayParams
    }
  }
}
