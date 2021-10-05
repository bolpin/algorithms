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
	let result = 0;
	result = parseInt(`${Math.abs(num)}`.split('').reverse().join(''));
	return Math.sign(num) * result;
}

console.log(reverseInt(-981));



    // parseInt(string)
    // Math.sign(int) (returns +/-1)
    // Math.abs(int)


    // SOLUTION 3 ***
    //let reversed = `${Math.abs(num)}`
    //    .split('')
    //    .reduce((revd, c) => c + revd, '');
    //return Math.sign(num) * parseInt(reversed); 

    
    // SOLUTION 2
    // let isNeg = num < 0;
    // prefix = '';

    // if (isNeg) {
    //     num = num * -1;
    //     prefix = '-';
    // }

    // let reversed = `${num}`
    //     .split('')
    //     .reduce((rev, c) => c + rev, '')

    // return parseInt(prefix + reversed)

    // SOLUTION 1
    // if (num === 0) { return num; }
    // let sign = '';
    // let mult = 1;
    // if (num < 0) {
    //     sign = '-';
    //     mult = -1;
    // }
    // let ar = []
    // num = num * mult;
    // while(num > 0) {
    //     ar.push(num % 10);
    //     num = Math.floor(num/10);
    // }
    // return parseInt(sign + ar.join(''));

module.exports = reverseInt;
