var raffleObject = require('./helpers/raffle-object');
var combineObjects = require('./combine-objects');

module.exports = function(array1, array2, childName){

    let combinedArrays = array1.map(function(item){
        return combineObjects(item, raffleObject(array2), childName);
    });

    return combinedArrays;
}