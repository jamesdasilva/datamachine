var AttributeTypes = {};

Object.prototype.getParams = function(type){
  var regExpParams = /:[\d|\w|;*]*$/g
  var stringParams = type.match(regExpParams) + '';
  if (stringParams != 'null') {
    stringParams = stringParams.slice(1);
    return stringParams.split(';');
  }
  return false;
}

Object.prototype.getName = function(type){
  var regExpTypeName = /^[\w*]*/g
  var typeName = type.match(regExpTypeName) + '';
  if (typeName != 'null') {
    return typeName;
  }
  return false;
}

var make = function(type){
  var keyType = Object.getName(type);
  AttributeTypes[keyType] = require(`./types/${keyType}`);
  if(AttributeTypes[keyType])
    return AttributeTypes[keyType].generate(type);
};

module.exports = {
  make: make
}
