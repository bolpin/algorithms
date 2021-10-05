// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
	let matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;










// REGEX SOLN
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// BASIC SOLUTION
// function vowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let c of str.toLowerCase()) {
//         if (vowels.includes(c)) {
//             count++;
//         }
//     }
//     return count;
// }
