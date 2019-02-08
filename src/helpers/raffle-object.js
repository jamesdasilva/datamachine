var generateRandomNumber = require( './generateRandomNumber' );

module.exports = function( arrayOfObjects ){
    return arrayOfObjects[ generateRandomNumber( 0, arrayOfObjects.length ) ];
};