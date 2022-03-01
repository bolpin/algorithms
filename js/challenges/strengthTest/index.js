// --- Directions
'use strict';

const countSetBits = (n) => {
  if (n === 0) 
    return 0;
  else
    return (n & 1) + countSetBits(n >> 1);
}

// strength is defined to be the sum of unique
// lower-case characters over all contiguous substrings
// of (only) the lower-case characters
function strengthTest(password) {
  const lowerCaseChars = password.split('').filter( c => c.match(/[a-z]/));
  // console.log(lowerCaseChars)
  let strength = 0;

  for (let i = 0; i < lowerCaseChars.length; i++) {
    for (let j = i+1; j <= lowerCaseChars.length; j++) {
      let uniques = 0;
      for (let k = i; k < j; k++) {
        uniques = uniques | 1 << (lowerCaseChars[k].charCodeAt(0) - 'a'.charCodeAt(0));
      }
      // console.log(`${lowerCaseChars.slice(i,j)} : ${countSetBits(uniques)}`)
      strength = strength + countSetBits(uniques);
    }
  }

  return strength;
}

module.exports = { strengthTest };
