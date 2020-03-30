import AttributeGenerator from './attribute-generator';
import TypesRegistry from '../../../../driven-adapters/types/types-registry'

export default class ObjectGenerator {

  constructor() { }

  public generate(objeto: Object): Object {
    const result: Object = { };  
    if(typeof objeto != 'object') return false;
    Object.keys(objeto).forEach(item => { 
      if(this.itIsObject(objeto[item])) {
        result[item] = this.generate(objeto[item]); // recursividade 
      } else {
        result[item] = new AttributeGenerator(
          new TypesRegistry()
        ).generate(objeto[item]);
      }
    });
    return result;
  }

  private itIsObject(schemaAtt: any): boolean {
    return typeof schemaAtt == 'object' && schemaAtt.constructor != RegExp;
  }
}
