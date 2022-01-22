// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
  let map = {};
  for (let c of str) {
    map[c] = map[c]+1 || 1
  }
  let maxCount = 0;
  let maxChar;
  for (let key in map) {
    if (map[key] >= maxCount) {
      maxChar = key;
      maxCount = map[key];
    }
  }
  return maxChar;
}


module.exports = maxChar;














    // SOLUTION 
// function maxChar(str) {
//   let map = {};
//   for (let c of str) {
//     map[c] = map[c]+1 || 1
//   }
//   let maxCount = 0;
//   let maxChar;
//   for (let key in map) {
//     if (map[key] >= maxCount) {
//       maxChar = key;
//       maxCount = map[key];
//     }
//   }
//   return maxChar;
// }

