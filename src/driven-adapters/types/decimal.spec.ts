var _chai = require('chai');
var DecimalType = require('./decimal');

describe('DecimalType', function() {
  describe('.genarate()', function() {
    var valueGenerated;
    beforeEach(function() {
      valueGenerated = DecimalType.generate('decimal:5;10;100');
    });

    it('should return a string when call .generate("decimal:2;0;100")', function() {
      _chai.expect(valueGenerated).to.be.a('number');
    });

    it('should return a string representing the given number with 5 decimal places when call .generate("decimal:2;0;100")', function() {
      _chai.expect(valueGenerated).to.match(/^\d+.\d{5}$/);
    });

    it('should return a string representing the given number with 5 decimal places when call .generate("decimal:5;0;100")', function() {
      _chai.expect(valueGenerated).to.match(/^\d+.\d{4,5}$/);
    });

    it('should return a string representing the given a number less than 100 when call .generate("decimal:5;0;100")', function() {
      _chai.expect(parseFloat(valueGenerated)).to.be.lessThan(100);
    });

    it('should return a string representing the given number greater than 10 when call .generate("decimal:5;10;100")', function() {
      _chai.expect(parseFloat(valueGenerated)).to.be.greaterThan(10);
    });
  });
});