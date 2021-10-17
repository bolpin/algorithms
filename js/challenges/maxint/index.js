// --- Directions
// implement a max function, taking two integers
// DO NOT use if/else or any other comparison operator

// flips one -> zero, zero -> 1
const flip = (bit) => {
	return 1 ^ bit;
}

const isNeg = (n) => {
	return (n >> 63) & 1;
}

const maxNaive = (a, b) => {
	let diff = a - b; 

	const negA = isNeg(a);
	const negB = isNeg(b);
	const negDiff = isNeg(diff);

	// An overflow condition can occur ONLY when
	// the sign of a and b are different.
	// If the signs are different, then the max is
	// the positive number
	let overflowRisk = negA ^ negB; // when overflow is possible 
	const overflowSafe = flip(overflowRisk); // when overflow is not possible

	const bFactor = overflowRisk * negA + overflowSafe * negDiff;
	const aFactor = flip(bFactor);

	console.log(negA + "|" + negB + "|" + negDiff + "   " +
				overflowRisk + "|" + overflowSafe + "    " +
				a + ":" + aFactor + ":" + b + ":" + bFactor);
	return a * aFactor + b * bFactor; 
}

module.exports = maxNaive;
