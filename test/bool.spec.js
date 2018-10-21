var chai = require('chai');
var BoolType = require('../src/types/bool');

describe('BoolType', function() {
  describe('.genarate()', function() {
    it('should return a bool when run method generate()', function() {
      chai.expect(BoolType.generate()).to.be.a('boolean');
    });
  });
});