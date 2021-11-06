// --- Directions
// You are given two 32-bit numbers, N and M and two bit positions, i and j. Write
// a method to insert M into N such that M starts at bit j and ends at bit i. You can
// assume that the bits j through i have enough space to fit all of M. That is, if
// M 1aa1 1, you can assume that there are at least 5 bits between j and You
// would not, for example, have j 3 and i 2, because M could not fully fit
// between bit 3 and bit 2.

// e.g. 3, 36, 3, 5

// 543210
// 1__1__ = 36
// ____11 = 3
//
// _11... = 3 moved to position 3,5
// [.]1__ = 36
// result:
// _111__ = 28


function overlay(num, target, startIdx, endIdx) {
	let mask = 0;
	for (let i = startIdx; i <= endIdx; i++) {
		mask = mask | (1 << i);
	}
	mask = ~mask;

	// console.log("---");
	// logBinary(mask);
	// console.log('');
	// logBinary(num << startIdx);
	// console.log('');
	// logBinary(target);
	// console.log('');
	// logBinary(target & mask);
	// console.log('');
	// logBinary(num << startIdx);
	// console.log("---");
	const result = (target & mask) | (num << startIdx);
	// logBinary(result);
	// console.log("---");
	return result;
}


// e.g. 3, 36, 3, 5
// console.log(overlay(3, 36, 3, 5));

// console.log(overlay(4, 31, 1, 3));



  

  

module.exports = overlay;