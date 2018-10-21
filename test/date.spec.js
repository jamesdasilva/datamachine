var chai = require('chai');
var DateType = require('../src/types/date');

describe('DateType', function(){
  describe('.genarate()', function() {
    var valueGenerated;
    beforeEach(function(){
      valueGenerated = DateType.generate('date:2000;2010');
    });
    it('should return a date when call .generate("date:2000;2010")', function() {
      chai.expect(valueGenerated.getFullYear).to.be.a('function');
    });
    it('should return a date before 2010 when call .generate("date:2000;2010")', function() {
      chai.expect(valueGenerated.getFullYear()).to.be.lessThan(2010);
    });
    it('should return a date after 2000 when call .generate("date:2000;2010")', function() {
      chai.expect(valueGenerated.getFullYear()).to.be.greaterThan(2000);
    });
  });
});