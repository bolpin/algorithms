// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


class StringStats {
	constructor(str) {
		this.charCounts = {};
		for (let c of str) {
			this.charCounts[c] = this.charCounts[c]++ || 1;	
		}
	}

	mostCommonChar() {
		let maxCount = 0;
		let maxChar = null;
		for (let key in this.charCounts) {
			if (maxCount < this.charCounts[key]) {
				maxCount = this.charCounts[key];
				maxChar = key;
			}
		}
		return maxChar;
	}
}

function maxChar(str) {
	counter = new StringStats(str);
	return counter.mostCommonChar();
}

module.exports = maxChar;














    // SOLUTION 
    // let map = {};
    // for (let c of str) {
    //     map[c] = map[c] + 1 || 1;
    // }
    //
    // let max = 0;
    // let maxChar;
    // for (let key in map) {
    //     if (map[key] >= max) {
    //         max = map[key];
    //         maxChar = key;
    //     }
    // }
    // return maxChar;
