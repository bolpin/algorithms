// --- Directions
// write a function that takes an array of numbers and returns the
// smallest positive integer (> 0) that does not appear in the
// array.

function smallestPosIntOmitted(arr) {
  let sortedPositives = arr.filter(x => x > 0).sort((a,b) => a-b);  
  if (sortedPositives.length === 0) {
    return 1;
  }
  let last = 0;
  while(sortedPositives.length) {
    let num = sortedPositives.shift();
    let diff = num-last;
    if (diff > 1) {
      return last+1;
    }
    last = num;
  }
  return last+1;
}


module.exports = { smallestPosIntOmitted };










// REGEX SOLN
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// BASIC SOLUTION
// function vowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let c of str.toLowerCase()) {
//         if (vowels.includes(c)) {
//             count++;
//         }
//     }
//     return count;
// }
