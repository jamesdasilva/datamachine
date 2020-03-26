import ObjectGenerator from './object-generator';

export default class ArrayGenerator {
  constructor() { }
  public generate(length, molds) {
    var result = [], moldsArray = [], indexMold;
    if(typeof molds != 'object') {
      return false;
    } else if(molds.length == 0) {
      moldsArray = Object.keys(molds).map(function(keyItem) {
        return molds[keyItem];
      });
    } else {
      moldsArray = molds;
    }
    for(let k = 0; k < length; k++) {
      indexMold = Math.floor(Math.random() * moldsArray.length);
      result.push(new ObjectGenerator().generate(moldsArray[indexMold]));
    }
    return result;
  }
}
