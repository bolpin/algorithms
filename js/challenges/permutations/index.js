// --- Directions
// Write a function that takes a string and returns an
// array of all permutations of the characters in it.

function permute(str) {
  if (!str || typeof str !== "string"){
    return "Please enter a string";
  } else if (str.length < 2 ){
    return str;
  }

  let permutationsArray = [];
  for (let i = 0; i < str.length; i++) {
    let pivot = str[i]; // pop an element out of a spot in the array
    let rest = str.slice(0, i) + str.slice(i+1, str.length); // grab the remnants
    for (let permutation of permute(rest)) {
      permutationsArray.push(pivot + permutation); // put the element at the front of each of the permutations of the remnants
    }
  }
  return permutationsArray;

}

// const result = permute("CART");
// console.log(result.sort());
// console.log(result.length);

module.exports = permute;
// let permute = (string) => {
// 	if (!string || typeof string !== "string"){
// 	  return "Please enter a string";
// 	} else if (string.length < 2 ){
// 	  return string;
// 	}
  
// 	let permutationsArray = [];
	 
// 	for (let i = 0; i < string.length; i++) {
// 		let char = string[i];

// 		let remainingChars = string.slice(0, i) + 
// 			string.slice(i + 1, string.length);

// 		for (let permutation of permute(remainingChars)) {
// 			permutationsArray.push(char + permutation)
// 		}
// 	}
// 	return permutationsArray;
// }