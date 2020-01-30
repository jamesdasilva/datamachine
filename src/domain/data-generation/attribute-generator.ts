import IGenerator from './igenerator';

export default class AttributeGenerator implements IGenerator {
  private AttributeTypes = {};
  constructor() { }

  private getName(type) {
    let regExpTypeName = /^[\w*]*/g;
    let typeName = type.match(regExpTypeName) + '';
    if (typeName != 'null') {
      return typeName;
    }
    return false;
  }

  generate(type) {
    var type = type;
    var regEx = /^\[\d+\]/;
    if(type.constructor == RegExp){
      let randExp = require(`../../types/randExp`); // mudar isso aqui
      if(randExp)
        return randExp.generate(type);
    }else if(regEx.test(type)){
      var array = type.match(regEx)[0];
      var arrayLength = parseInt(array.slice(1, array.length - 1));
      array = [];
      type = type.split(']');
      type = type[1];
      for(var k = 0; k < arrayLength; k++){
        array.push(this.generate(type));
      }
      return array;
    }else{
      var keyType = this.getName(type) as string;
      this.AttributeTypes[keyType] = require(`../../types/${keyType}`);
      if(this.AttributeTypes[keyType])
        return this.AttributeTypes[keyType].generate(type);
    }
  };
}
