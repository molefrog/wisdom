var chai = require('chai');
var expect = chai.expect;
var repeat = require('../src/useless-funcs').repeat;


describe('repeat function', function() {
  it('just repeats string', function() {
    expect(repeat('kek', 3)).to.equal('kekkekkek')
    expect(repeat('cat', 1)).to.equal('cat')
  });

  context('when empty string is passed', function() {
    it("doesn't crash", function(){
      expect(function() {
        repeat('cat', 25)
      }).to.not.throw();
    });

    it("returns an empty string", function(){
      expect(repeat('', 2525324)).to.equal('');
    });
  });

  context('when second argument is omited', function() {
    it("just returns that string", function(){
      expect(repeat('dog')).to.equal('dog');
      expect(repeat('')).to.equal('');
      expect(repeat('word')).to.equal('word');
    });
  });

  context('when first argument is not a string', function() {
    it('fails with an exception', function(){
      expect(function() { repeat(25, 25) }).to.throw()
      expect(function() { repeat(null, 25) }).to.throw()
      expect(function() { repeat(undefined, 25) }).to.throw()
      expect(function() { repeat({}, 25) }).to.throw()
    });
  });
});
