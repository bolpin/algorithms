// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


class CharCounter {
	constructor(str) {
		this.counts = {};
		for(const c of str) {
			this.counts[c] = this.counts[c]+1 || 1;
		}
	}
	max() {
		let maxCount = 0;
		let maxChar = null;
		for (const key in this.counts) {
			if(this.counts[key] > maxCount) {
				maxCount = this.counts[key];
				maxChar = key;
			}
		}
		return maxChar;
	}
}

function maxChar(str) {
	return new CharCounter(str).max();
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
