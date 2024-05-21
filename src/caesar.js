const caesarModule = (function () {
  // function to perform caesar cipher
  function caesar(input, shift, encode = true) {
    // check for invalid shift values
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // make input lowercase to ignore capital letters
    const inputLower = input.toLowerCase();

    // reference alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // determine shift amount
    const shiftAmount = encode ? shift : -shift;

    // initialize result string
    let result = '';

    // iterate through each character in input
    for (let i = 0; i < inputLower.length; i++) {
      const character = inputLower[i];
      if (alphabet.includes(character)) {
        // calculate new index with wrapping
        let newIndex = (alphabet.indexOf(character) + shiftAmount) % 26;
        if (newIndex < 0) newIndex += 26;
        // add shifted character to result
        result += alphabet[newIndex];
      } else {
        // add non-alphabetic characters
        result += character;
      }
    }

    // return the result
    return result;
  }

  // expose the caesar function
  return {
    caesar,
  };
})();

// export the caesar function
module.exports = { caesar: caesarModule.caesar };
