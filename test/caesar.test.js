// import required modules
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

// describe the test suite
describe('Caesar Shift', () => {
  // test for invalid shift values
  it('should return false if shift value is 0, less than -25, greater than 25, or not present', () => {
    expect(caesar("thinkful", 0)).to.be.false;
    expect(caesar("thinkful", 26)).to.be.false;
    expect(caesar("thinkful", -26)).to.be.false;
    expect(caesar("thinkful")).to.be.false;
  });

  // test to ignore capital letters
  it('should ignore capital letters', () => {
    expect(caesar("A Message", 3)).to.equal("d phvvdjh");
  });

  // test for shifts that go past the end of the alphabet
  it('should handle shifts that go past the end of the alphabet', () => {
    expect(caesar("xyz", 3)).to.equal("abc");
  });

  // test to maintain spaces and other non-alphabetic symbols
  it('should maintain spaces and other non-alphabetic symbols', () => {
    expect(caesar("This is a secret message!", 8)).to.equal("bpqa qa i amkzmb umaaiom!");
  });

  // test to decode a message correctly
  it('should decode a message correctly', () => {
    expect(caesar("bpqa qa i amkzmb umaaiom!", 8, false)).to.equal("this is a secret message!");
  });
});
