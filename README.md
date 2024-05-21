# Decoder Ring Capstone Project

## Overview

This project is a capstone for the Thinkful curriculum. It’s all about building an app that can encode and decode messages using different ciphers. The ciphers we used are Caesar Shift, Polybius Square, and Substitution Cipher.

## Ciphers Included

### Caesar Shift
- **Function**: `caesar(input, shift, encode = true)`
- **What it does**: Shifts each letter in the message by a set number of places in the alphabet. It handles shifts past the end of the alphabet and ignores capital letters.
- **Example**: `caesar("Zebra Magazine", 3)` => `"cheud pdjdclqh"`

### Polybius Square
- **Function**: `polybius(input, encode = true)`
- **What it does**: Changes each letter to a pair of numbers based on a 5x5 grid. The letters 'i' and 'j' share the same pair of numbers (42).
- **Example**: `polybius("message")` => `"23513434112251"`

### Substitution Cipher
- **Function**: `substitution(input, alphabet, encode = true)`
- **What it does**: Replaces each letter in the message with a letter from a given 26-character alphabet. It keeps spaces and ignores capital letters.
- **Example**: `substitution("message", "plmoknijbuhvygctfxrdzeswaq")` => `"ykrrpik"`

## Tests
- Each function is tested to make sure it works correctly. The tests check for encoding, decoding, keeping spaces, and handling wrong inputs.
