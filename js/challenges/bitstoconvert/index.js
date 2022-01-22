// --- Directions
// Write a function to determine the number of bits required to convert integer A to i
// nteger B.                                                                          

const logBinary = require("./logBinary");
function countBits(num) {
	let count = 0;
	while(num > 0) {
		if (1 & num) {
			count++;
		}
		num = num >> 1;
	}
	return count;
}

function bitsToConvert(x, y){
	result = countBits(x ^ y);
	return result;
}


// EXAMPLE                                                                            
// Input: 31, 14                                                                      
// Output: 2

// function countBits(num) {
// 	let count = 0;
// 	while(num > 0) {
// 		if (1 & num) {
// 			count++;
// 		}
// 		num = num >> 1;
// 	}
// 	return count;
// }

// function bitsToConvert(x, y){
// 	result = countBits(x ^ y);
// 	return result;
// }
// console.log(countBits(31));
// console.log(countBits(14));


// logBinary(31);
// logBinary(14);
// console.log(bitsToConvert(31, 14));
// console.log(bitsToConvert(32, 1));
// console.log(bitsToConvert(32, 3));




  

module.exports = bitsToConvert;