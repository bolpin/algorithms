// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

module.exports = palindrome;


    // SOLUTION 3
    // return str.split('').every((c, idx) => c === str[str.length-(idx+1)]);

    // SOLUTION 2
    // const reversed = str.split('').reverse().join('')
    // return str === reversed;

    // SOLUTION 1
    // for(let i = str.length-1, j = 0; i >= j; i--, j++) {
    //     if (str[i] !== str[j]){
    //         return false;
    //     }
    //     return true;
    // }
