const polybiusModule = (function () {
  // polybius square for encoding
  const polybiusSquare = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
  };

  // polybius square for decoding
  const decodePolybiusSquare = {
    '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
    '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
    '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
    '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
    '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
  };

  function polybius(input, encode = true) {
    if (!encode) {
      // decode
      const spaceInput = input.split(' ').join('');
      // check if input length is even
      if (spaceInput.length % 2 !== 0) return false;

      let result = '';
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === ' ') {
          // add spaces to result
          result += ' ';
          i--; // decrement i to handle spaces
        } else {
          const pair = input[i] + input[i + 1];
          // add decoded character to result
          result += decodePolybiusSquare[pair] || '';
        }
      }
      return result;
    } else {
      // encode
      let result = '';
      for (let i = 0; i < input.length; i++) {
        // convert to lowercase
        const character = input[i].toLowerCase();
        if (character === ' ') {
          // maintain spaces
          result += ' ';
        } else {
          // add encoded pair to result
          result += polybiusSquare[character];
        }
      }
      return result;
    }
  }

  // expose the polybius function
  return {
    polybius,
  };
})();

// export the polybius function
module.exports = { polybius: polybiusModule.polybius };
