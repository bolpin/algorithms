// --- Directions
// Write a function that takes a string and returns an
// array of all permutations of the characters in it.

let permute = (string) => {
	if (!string || typeof string !== "string"){
	  return "Please enter a string";
	} else if (string.length < 2 ){
	  return string;
	}
  
	let permutationsArray = [];
	 
	for (let i = 0; i < string.length; i++) {
		let char = string[i];

		let remainingChars = string.slice(0, i) + 
			string.slice(i + 1, string.length);

		for (let permutation of permute(remainingChars)) {
			permutationsArray.push(char + permutation)
		}
	}
	return permutationsArray;
}
 
let result = permute("CART");

console.log(result.sort());
console.log(result.length);

module.exports = permute;
