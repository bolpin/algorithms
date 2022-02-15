// returns the largest sum of consecutive elements
// elements might be integers, including negatives
const maxContiguousSum = function(intArray) {
	if (intArray.length < 1) {
		throw "invalid input: empty array";
	}
	let maxSum = intArray[0];
	for (let i = 0; i < intArray.length; i++) {
		for (let j = i; j <= intArray.length; j++) {
			const tmp = intArray.slice(i, j).reduce((sum, el) => sum + el, 0);
			console.log(intArray.slice(i, j));
			if (tmp > maxSum) {
				maxSum = tmp;
			}
		}
		console.log(maxSum);
	}
	return maxSum;
}

const bookMaxContiguousSum = function(ar) {
	let maxSum = 0;
	let sum = 0;
	for(let i = 0; i < ar.length; i++) {
		sum += ar[i];
		if (maxSum < sum) {
			maxSum = sum;
		} else if (sum < 0) {
			sum = 0;
		}
		console.log(`${sum}   ${maxSum}`);
	}
	return maxSum;
}

console.log(maxContiguousSum([2, 3, -8, -1, 2, 4, -2, 3]));
console.log(maxContiguousSum([100, -5, 1, -5, 1, -5, 100]));
console.log(bookMaxContiguousSum([100, -5, 6, -99, -5, 1, -5, 100]));
