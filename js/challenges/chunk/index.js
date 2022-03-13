
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  for (let item of array) {
    const lastElem = chunked[chunked.length - 1];
    if (chunked.length === 0 || lastElem.length === size) {
      chunked.push([item]);
    } else {
      lastElem.push(item)
    }
  }
	return chunked;
}

// console.log(chunk([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 3));
// console.log(chunk([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 4));

module.exports = chunk;











// SOLUTION 2
// function chunk(array, size) {
//     let i = 0;
//     let chunked = [];
//     while (i < array.length) {
//         chunked.push(array.slice(i, i+size));
//         i += size;
//     }
//     return chunked;
// };

// SOLUTION 1
// function chunk(array, size) {
// let chunked = [];

// for (let elem of array) {
//     let last = chunked[chunked.length - 1];
//     if (chunked.length === 0 || last.length === size) {
//         chunked.push([elem]);
//     } else {
//         last.push(elem);
//     }
// }
// return chunked;
// };