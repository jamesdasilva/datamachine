var _chai = require('chai');
var BoolType = require('../src/types/boolean');

describe('BoolType', () => {
  describe('.genarate()', () => {
    it('should return a bool when run method generate()', () => {
      _chai.expect(BoolType.generate()).to.be.a('boolean');
    });
  });
});