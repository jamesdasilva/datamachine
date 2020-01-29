import generateRandomNumber from './generateRandomNumber';

export default function( arrayOfObjects ){ 
    return arrayOfObjects[ generateRandomNumber( 0, arrayOfObjects.length ) ];
};