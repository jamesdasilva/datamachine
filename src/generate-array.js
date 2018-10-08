var generateObject = require('./generate-object');

function generateArray(length, molds){
  var result = [], moldsArray = [], indexMold;
  if(typeof molds != 'object'){
    return false;
  }else if(molds.length == 0){
    moldsArray = Object.keys(molds).map(function(keyItem){
      return molds[keyItem];
    });
  }else{
    moldsArray = molds;
  }  

  for(k = 0; k < length; k++){
    indexMold = Math.floor(Math.random() * moldsArray.length);
    result.push(generateObject(moldsArray[indexMold]));
  }
  return result;
}

module.exports = generateArray;
