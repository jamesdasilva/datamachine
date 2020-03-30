import AttributeGenerator from './attribute-generator';
import TypesRegistry from '../../../../driven-adapters/types/types-registry'

export default class ObjectGenerator {
  constructor() { }
  public generate(objeto) {
    var result = { };  
    if(typeof objeto != 'object') return false;
    Object.keys(objeto).forEach(item => { 
      if(typeof objeto[item] == 'object' && objeto[item].constructor != RegExp) {
        result[item] = this.generate(objeto[item]); // recursividade 
      } else {
        result[item] = new AttributeGenerator(new TypesRegistry()).generate(objeto[item]);
      }
    });
    return result;
  }
}
