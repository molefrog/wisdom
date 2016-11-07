var chai = require('chai');
var expect = chai.expect;
var digits = require('../src/useless-funcs').digits;

describe('digits function', function() {
  it('returns the array of digits of a number', function() {
    expect(digits(1337)).to.deep.equal([1,3,3,7]);
    expect(digits(228)).to.deep.equal([2,2,8]);
    expect(digits(1488)).to.deep.equal([1,4,8,8]);
    expect(digits(420)).to.deep.equal([4,2,0]);
  });

  it('returns array with zero for zero', function() {
    expect(digits(0)).to.deep.equal([0]);
  });
});
