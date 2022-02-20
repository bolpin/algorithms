// 'use strict';
// --- Directions

// Complete the 'codeMatcher' function below.

// The function is expected to return 1 or 0, depending on 
// whether all codes match the array, and in the same order 
// Inputs:
//  1. codes (array of string arrays)
//  2. products (array of products)
// 
// e.g. 
// with codes = [['f', 'f'], ['e', '*', 'e']]
// will match = ['f', 'f', 'c', 'e', 'f', 'e']
// will NOT match = ['c', 'e', 'f', 'e', 'f', 'f'] wrong order
// will NOT match = ['f', 'f', 'c', 'e', 'f', 'c', 'e'] wild-card represents one and only one
  
// codes = [['f', 'f'], ['f', 'f', '*']]
// will NOT match = ['f', 'f', 'c', 'f', 'f', 'e'] because the second 'f', 'f' combo will match
// on the first code, not the second

  
function codeMatcher(codes, pattern) {
    if (!Array.isArray(codes) || !Array.isArray(pattern)) {
      return 0;
    }
    return 0;
}



module.exports = { codeMatcher };
