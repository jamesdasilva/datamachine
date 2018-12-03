//var generateObject = require('./generate-object');

var AttributeTypes = {};

Object.prototype.getParams = function(type){
  var regExpParams = /:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+$/g
  var stringParams = type.match(regExpParams) + '';
  console.log(type, 'stringParams', stringParams);
  if (stringParams != 'null') {
    stringParams = stringParams.slice(1);
    return stringParams.split(';');
  }
  return false;
}

var getName = function(type){
  var regExpTypeName = /^[\w*]*/g
  var typeName = type.match(regExpTypeName) + '';
  if (typeName != 'null') {
    return typeName;
  }
  return false;
}

var makeAtt = function(type){
  var type = type;
  var regEx = /^\[\d+\]/;
  if(regEx.test(type)){
    var array = type.match(regEx)[0];
    var arrayLength = parseInt(array.slice(1, array.length - 1));
    var array = [];
    type = type.split(']');
    type = type[1];
    for(var k = 0; k < arrayLength; k++){
      array.push(makeAtt(type));
    }
    return array;
  }else{
    var keyType = getName(type);
    AttributeTypes[keyType] = require(`./types/${keyType}`);
    if(AttributeTypes[keyType])
      return AttributeTypes[keyType].generate(type);
  }
  
};

module.exports = {
  make: makeAtt
}
