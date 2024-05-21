// import required modules
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

// describe the test suite
describe('substitution', () => {
  // test for invalid secret alphabet length
  it('should return false if the given secretAlphabet isn\'t exactly 26 characters long', () => {
    const actual = substitution('thinkful', 'short');
    expect(actual).to.be.false;
  });

  // test for duplicate symbols in secret alphabet
  it('should return false if there are any duplicate symbols in the given secretAlphabet', () => {
    const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
    expect(actual).to.be.false;
  });

  // test for correct translation with valid secret alphabet
  it('should correctly translate the given phrase based on the secretAlphabet given to the function', () => {
    const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });

  // test to maintain spaces before and after encoding
  it('should maintain spaces in the message, before and after encoding or decoding', () => {
    const actual = substitution('you are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  });

  // test to ignore capital letters
  it('should ignore capital letters', () => {
    const actual = substitution('You Are An Excellent Spy', 'xoyqmcgrukswaflnthdjpzibev');
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  });

  // test for decoding with valid secret alphabet
  it('should decode a message with the given secretAlphabet', () => {
    const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });

  // test to maintain spaces while decoding
  it('should maintain spaces in the decoded message', () => {
    const actual = substitution('elp xhm xf mbymwwmfj dne', 'xoyqmcgrukswaflnthdjpzibev', false);
    const expected = 'you are an excellent spy';
    expect(actual).to.equal(expected);
  });
});
