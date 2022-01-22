// --- Directions
// Given a string, return a new string with the reversed
// order of words.  Can you do it without using an n-length
// buffer?
// --- Examples
//   reverse('I am fine') === 'fine am I'

//   "I am Brian"
//              ^
//   "I am Brian"
//        |     ^
//       space
// buf = "Brian"
//   "I am Brian"
//        |
//        ^


  
function reverseWords(str) {
  const reverseChars = (chars) => chars.split('')
    .reduce( (result, c) => {
      return c + result;
    }, '')
  return reverseChars(str)
    .split(' ') 
    .map( c => reverseChars(c), '')
    .filter( c => c !== '')
    .join(' ')
}


// SOLUTION 1
// use a buffer
//
// function reverseWords(str) {
// 	let buffer = [];
// 	let tokenReadPos = str.length - 1;
// 	let wordReadPos = 0;
// 	let wordEnd = 0;

// 	while (tokenReadPos >= 0) {
// 		if (str[tokenReadPos] === ' ') {
// 			buffer.push(str[tokenReadPos]);
// 			tokenReadPos--;
// 		} else {
// 			wordEnd = tokenReadPos;
// 			while (tokenReadPos >= 0 && str[tokenReadPos] != ' ') {
// 				tokenReadPos--;
// 			}
// 			wordReadPos = tokenReadPos + 1;
// 			while (wordReadPos <= wordEnd) {
// 				buffer.push(str[wordReadPos]);
// 				wordReadPos++;
// 			}
// 		}
// 	}
// 	for (let i = str.length - 1; i >= 0; i--) {
// 	}
// 	return buffer.join('');
// }


// IDIOMATIC JS
// SOLUTION 2
// function reverseWords(str) {
// 	return str.split(' ').reverse().join(' ')
// }


// SOLUTION 3 
// This is the 'elegant solution' for a language like C
// But it is weird in js
// 1. first reverse the whole string
// 2. find the words
// 3. reverse the chars in each word
//
// function reverseWords(str) {
// 	const reverseChars = (str1) => {
// 		return str1.split('').reduce((res, c) => {
// 			return  c + res;
// 		}, '');
// 	}
// 	return reverseChars(str).split(' ').map( (word) => {
// 		return reverseChars(word);
// 	}).join(' ');
// }


module.exports = reverseWords;

