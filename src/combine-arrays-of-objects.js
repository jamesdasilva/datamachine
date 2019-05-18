var raffleObject = require('./helpers/raffle-object');
var combineObjects = require('./combine-objects');

module.exports = ( array1, array2, childName ) => 
    array1.map( item => 
        combineObjects( item, raffleObject( array2 ), childName ) );
