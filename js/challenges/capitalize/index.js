// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
	let next_cap = true;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if(i === 0 || str[i-1].match(/[\n\t ]/)) {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
}

module.exports = capitalize;








    // SOLUTION
    // let result = [];
    // for (let word of str.split(' ')) {
    //   result.push(word[0].toUpperCase() + word.slice(1));
    // }
    // return result.join(' ');

// SOLUTION 2
// function capitalize(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0 || [' ', '\t', '\n'].includes(str[i-1])) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }
