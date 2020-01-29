import raffleObject from './helpers/raffle-object';
import combineObjects from './combine-objects';

export default ( array1, array2, childName ) => 
    array1.map( item => 
        combineObjects( item, raffleObject( array2 ), childName ) );
