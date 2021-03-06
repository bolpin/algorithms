// --- Directions
// Write a function which takes an integer n, and returns the
// number of trailing zeros in n! (n factorial)

// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// }

// Note that for each multiple of two
// and multiple of 5, there will be an
// additional zero at the end.
const trailingZeros = (n) => {
    let factorsOfFive = 0;
    for (let multiplier = n; multiplier > 1; multiplier--) {
      let m = multiplier;
      while(m % 5 === 0) {
        factorsOfFive++;
        m = m / 5;
      }
    }
    return factorsOfFive;
}

module.exports = trailingZeros;

// const trailingZeros = (n) => {
//     let factorsOfFive = 0;
//     for(let i = n; i > 1; i--) {
//         let multiplier = i;
//         while(multiplier % 5 === 0) {
//             factorsOfFive++;
//             multiplier /= 5;
//         }
//     }
//     return factorsOfFive;
// }


// const trailingZeros = (n) => {
// 	let count = 0;
// 	for (let i = 1; i <= n; i++) {
// 		let multiplier = i;
// 		while(multiplier % 5 === 0) {
// 			count++;
// 			multiplier = multiplier / 5;
// 		}
// 	}
// 	return count;
// }
