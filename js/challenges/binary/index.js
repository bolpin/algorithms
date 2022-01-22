// find the index of an element in a sorted array using
// a binary search technique

function binarySearch(val, ar) {
  let minIdx = 0;
  let maxIdx = ar.length - 1; 
  let mid = Math.floor(minIdx + (maxIdx - minIdx)/2);
  while (maxIdx >= minIdx) {
    if (ar[mid]===val) {
      return val;
    }
    if (ar[mid] > val) {
      minIdx = mid + 1;
    }
    if (ar[mid] < val) {
      maxIdx = mid - 1;
    }
  } 
	return -1;
}

module.exports = binarySearch;


// function binarySearch(val, ar) {
// 	let lower = 0;
// 	let upper = ar.length - 1;

// 	while (upper >= lower) {
// 		let mid = lower + Math.floor((upper - lower) / 2);
// 		if (ar[mid] === val) {
// 			return mid;
// 		}
// 		if (ar[mid] > val) {
// 			upper = mid - 1;
// 		}
// 		if (ar[mid] < val) {
// 			lower = mid + 1;
// 		}
// 	}

// 	return -1;
// }


