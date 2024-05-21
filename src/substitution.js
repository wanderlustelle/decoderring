const substitutionModule = (function () {
  // function to perform substitution cipher
  function substitution(input, secretAlphabet, encode = true) {
    // check if secret alphabet is valid
    if (!secretAlphabet || secretAlphabet.length !== 26 || new Set(secretAlphabet).size !== 26) return false;
    
    // standard alphabet for reference
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    // convert input to lowercase
    const lowerInput = input.toLowerCase();
    
    // initialize result string
    let result = '';

    // iterate through each symbol in input
    for (let symbol of lowerInput) {
      // maintain spaces
      if (symbol === ' ') {
        result += ' ';
        continue;
      }

      // find the index of the symbol
      const index = encode ? standardAlphabet.indexOf(symbol) : secretAlphabet.indexOf(symbol);
      if (index === -1) return false;

      // add encoded or decoded symbol to result
      result += encode ? secretAlphabet[index] : standardAlphabet[index];
    }
    
    // return the result
    return result;
  }

  // expose the substitution function
  return {
    substitution,
  };
})();

// export the substitution function
module.exports = { substitution: substitutionModule.substitution };
