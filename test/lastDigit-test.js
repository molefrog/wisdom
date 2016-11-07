var chai = require('chai');
var expect = chai.expect;
var lastDigit = require('../src/useless-funcs').lastDigit;

describe('lastDigit function', function() {
  it('returns the last digit of number', function() {
    expect(lastDigit(1337)).to.equal(7);
    expect(lastDigit(1488)).to.equal(8);
    expect(lastDigit(100)).to.equal(0);
    expect(lastDigit(148)).to.equal(8);
    expect(lastDigit(321)).to.equal(1);
  });

  it('returns zero for zero', function() {
    expect(lastDigit(0)).to.equal(0);
  });

  it('it works correctly for fractionals', function() {
    expect(lastDigit(25.19)).to.equal(5);
  });
});
