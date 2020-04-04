import AttributeGenerator from './attribute-generator';
import IObtainType from '../../../../boundary/driven-port/i-obtain-types'

export default class ObjectGenerator {

  constructor(private obtainType: IObtainType) { }

  public generate(objeto: Object): Object {
    const result: Object = { };
    Object.keys(objeto).forEach(item => { 
      if(this.itIsObject(objeto[item])) {
        result[item] = this.generate(objeto[item]); // recursividade 
      } else {
        result[item] = new AttributeGenerator(this.obtainType).generate(objeto[item]);
      }
    });
    return result;
  }

  private itIsObject(schemaAtt: any): boolean {
    return typeof schemaAtt == 'object' && schemaAtt.constructor != RegExp;
  }
}
