var _chai = require('chai');
import generateRandomNumber from '../src/helpers/generateRandomNumber';

describe('generateRandomNumber()', function(){

    it('should return a value between 4 and 10 when call generateRandomNumber(4, 10)', function() {
      _chai.expect(generateRandomNumber(4, 10)).to.be.within(4, 10);
    });
    it('should return a value between 2 and 3 when call generateRandomNumber(2, 3)', function() {
      _chai.expect(generateRandomNumber(2, 3)).to.be.within(2, 3);
    });
    it('should return a value between 0 and 5 when call generateRandomNumber(0, 5)', function() {
      _chai.expect(generateRandomNumber(0, 5)).to.be.within(0, 5);
    });
    it('should return false when call generateRandomNumber(2, 2)', function() {
      _chai.expect(generateRandomNumber(2, 2)).to.be.false;
    });
    it('should return false when call generateRandomNumber(3, 2)', function() {
      _chai.expect(generateRandomNumber(3, 2)).to.be.false; 
    });
});
