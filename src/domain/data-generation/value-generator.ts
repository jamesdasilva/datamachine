//var generateObject = require('./generate-object');

let AttributeTypes = {};

let getName = type => {
  let regExpTypeName = /^[\w*]*/g;
  let typeName = type.match(regExpTypeName) + '';
  if (typeName != 'null') {
    return typeName;
  }
  return false;
}

let makeAtt = type => {
  var type = type;
  var regEx = /^\[\d+\]/;
  if(type.constructor == RegExp){
    let randExp = require(`../../types/randExp`);
    if(randExp)
      return randExp.generate(type);
  }else if(regEx.test(type)){
    var array = type.match(regEx)[0];
    var arrayLength = parseInt(array.slice(1, array.length - 1));
    array = [];
    type = type.split(']');
    type = type[1];
    for(var k = 0; k < arrayLength; k++){
      array.push(makeAtt(type));
    }
    return array;
  }else{
    var keyType = getName(type) as string;
    AttributeTypes[keyType] = require(`../../types/${keyType}`);
    if(AttributeTypes[keyType])
      return AttributeTypes[keyType].generate(type);
  }
  
};
 
export default { make : makeAtt };
