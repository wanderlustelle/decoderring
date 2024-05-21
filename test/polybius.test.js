// import required modules
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

// describe the test suite
describe('Polybius Square', () => {
  // describe encoding tests
  describe('Encoding', () => {
    // test for encoding message
    it('should encode a message by converting letters to number pairs', () => {
      const input = "thinkful";
      const expected = "4432423352125413";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    // test to maintain spaces while encoding
    it('should maintain spaces in the message while encoding', () => {
      const input = "hello world";
      const expected = "3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    // test to ignore capital letters
    it('should ignore capital letters', () => {
      const input = "Hello World";
      const expected = "3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    // test for translating i and j to 42
    it('should translate the letters i and j to 42', () => {
      const input = "ij";
      const expected = "4242";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
  });

  // describe decoding tests
  describe('Decoding', () => {
    // test for decoding message
    it('should decode a message by translating each pair of numbers into a letter', () => {
      const input = "4432423352125413";
      const expected = "th(i/j)nkful";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });

    // test to maintain spaces while decoding
    it('should maintain spaces in the message while decoding', () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });

    // test to check for odd length input
    it('should return false if the length of all numbers is odd', () => {
      const input = "44324233521254134"; // odd number of digits
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});
