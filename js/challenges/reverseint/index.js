// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  const sign = Math.sign(num);
  let abs = Math.abs(num);
  return sign * parseInt(`${abs}`.split('').reverse().join('')); 
}




    // parseInt(string)
    // Math.sign(int) (returns +/-1)
    // Math.abs(int)


    // SOLUTION 2
    //let reversed = `${Math.abs(num)}`
    //    .split('')
    //    .reduce((revd, c) => c + revd, '');
    //return Math.sign(num) * parseInt(reversed); 


    // SOLUTION 1
// function reverseInt(num) {

// 	let reversed = 0;
// 	let n = Math.abs(num);
// 	while(n > 0) {
// 		let a = n % 10
// 		n = Math.floor(n/10);
// 		reversed = reversed * 10 + a;
// 	}

// 	let sign = num < 0 ? -1 : 1;

// 	return sign * reversed;
// }


module.exports = reverseInt;
