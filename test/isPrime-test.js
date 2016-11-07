var chai = require('chai');
var expect = chai.expect;
var isPrime = require('../src/useless-funcs').isPrime;
var dividedFlags = require('../src/useless-funcs').dividedFlags;
var hasElement = require('../src/useless-funcs').hasElement;


describe('isPrime function', function() {
  it('just returns "true" for primes', function() {
    expect(isPrime(5)).to.equal(true);
    expect(isPrime(23)).to.equal(true);
    expect(isPrime(7)).to.equal(true);
    expect(isPrime(173)).to.equal(true);
    expect(isPrime(2)).to.equal(true);
  });

  it('just returns "false" for not primes', function() {
    expect(isPrime(18)).to.equal(false);
    expect(isPrime(26)).to.equal(false);
    expect(isPrime(250)).to.equal(false);
  });

  it('just returns "false" for 1', function() {
    expect(isPrime(1)).to.equal(false);
  });

  it('just returns "false" for 0', function() {
    expect(isPrime(0)).to.equal(false);
  });
});

describe('dividedFlags function', function() {
  it('just returns array with flags', function() {
    expect(dividedFlags(3)).to.deep.equal([false]);
    expect(dividedFlags(5)).to.deep.equal([false, false, false]);
    expect(dividedFlags(4)).to.deep.equal([true, false]);
  });

  it('just returns something for 2', function() {
    expect(dividedFlags(2)).to.deep.equal([]);
  });
});
