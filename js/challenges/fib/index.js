// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const { valueToNode } = require("@babel/types");

function fib(n) {
	if (n<0) {
		throw new Error("neg argument prohibited");
	}
	if (n < 2) {
		return n;
	}
	return (fib(n-1) + fib(n-2));
}

function memoize(fn) {
	const cache = {};
	return (...args) => {
		if (cache[args]) {
			return cache[args];
		}
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	}
}

fib = memoize(fib);


const start = new Date().getTime();

fib(40);
const end = new Date().getTime();
const elapsed = end - start;

console.log(`Elapsed: ${elapsed}`)


module.exports = fib;
// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         if (cache[args]) {
//             return cache[args];
//         }
//         const result = fn.apply(this, args);
//         cache[args] = result;
//         // console.log(cache);
//         return result;
//     };
// }
