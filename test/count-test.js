var chai = require('chai');
var expect = chai.expect;
var count = require('../src/useless-funcs').count;
var countWhere = require('../src/useless-funcs').countWhere;
var isPrime = require('../src/useless-funcs').isPrime;


describe('count function', function() {
  it('returs the number of occurences of an element', function() {
    expect(count([1,2,3], 3)).to.equal(1);
    expect(count([1,2,4], 3)).to.equal(0);
    expect(count([3,3,1], 3)).to.equal(2);
    expect(count(['wat','wat',1], 'wat')).to.equal(2);
  });


  it('returns 0 when an empty array is given', function() {
    expect(count([], 3)).to.equal(0);
  });

});

describe('countWhere function', function() {
  it('returns number of elements that match the predicate', function() {
    expect(
      countWhere([1,2,5,7], isPrime)
    ).to.equal(3);
  });
});
