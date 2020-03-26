import AttributeGenerator from './attribute-generator';

export default class ObjectGenerator {
  constructor() { }
  public generate(objeto) {
    var result = { };  
    if(typeof objeto != 'object') return false;
    Object.keys(objeto).forEach(item => { 
      if(typeof objeto[item] == 'object' && objeto[item].constructor != RegExp) {
        result[item] = this.generate(objeto[item]); // recursividade 
      } else {
        result[item] = new AttributeGenerator().generate(objeto[item]);
      }
    });
    return result;
  }
}
