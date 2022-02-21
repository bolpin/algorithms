// 'use strict';
// --- Directions

// Complete the 'codeMatcher' function below.

// The function is expected to return 1 or 0, depending on 
// whether all codes match the array, and in the same order 
// Also, if codes is '', then return 1

// Inputs:
//  1. codes (array of strings of space-delimited codes)
//  2. products (array of products)
// 
// e.g. 
// with codes = [['f f'], ['e * e']]
// will match = ['f', 'f', 'c', 'e', 'f', 'e']
// will NOT match = ['c', 'e', 'f', 'e', 'f', 'f'] wrong order
// will NOT match = ['f', 'f', 'c', 'e', 'f', 'c', 'e'] wild-card represents one and only one
// will NOT match = ['f', 'f', 'c', 'e', 'e'] wild-card represents one and only one
  
// codes = ['f f'], ['f f *']]
// will NOT match = ['f', 'f', 'c'] because the second code match
// requires all the elements of the first code match

function exactMatch(code, subPattern) {
  if (code.length === 0 ) { return true; }


  if (code.length !== subPattern.length) {
    return false;
  }
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== subPattern[i] && code[i] !== '*') {
      return false;
    }
  }
  return true;
}

// return 1 if pattern matches all codes, in order
// return 0, otherwise
function codeMatcher(codes, pattern) {
  const codeMatches = [];

  if (!Array.isArray(codes) || !Array.isArray(pattern)) {
    return 0;
  }
  
  for (let i = 0; i < pattern.length; i++) {
    if (codes.length === 0) {
      break;
    }
    if (exactMatch(codes[0].split(' '), pattern.slice(i, i + codes[0].split(' ').length))){
      codes.shift();
    } 
  }
 
  if (codes.length > 0) { // there are codes that haven't been matched
    return 0;
  }
  
  return 1;
}



module.exports = { codeMatcher };
