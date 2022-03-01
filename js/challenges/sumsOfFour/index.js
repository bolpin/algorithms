// --- Directions
// return an ordered array of all
// the sums of combinations of four
// from the input array
//
// Assume the input is an array of numbers
// of length >= 4


//  Generate all combinations of an array.
//  @param {Array} sourceArray - Array of input elements.
//  @param {number} comboLength - Desired length of combinations.
//  @return {Array} Array of combination arrays.
function generateCombinations(sourceArray, comboLength) {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];

  const combos = []; // Stores valid combinations as they are generated.

  // Accepts a partial combination, an index into sourceArray,
  // and the number of elements required to be added to create a full-length combination.
  // Called recursively to build combinations, adding subsequent elements at each call depth.
  const makeNextCombos = (workingCombo, currentIndex, remainingCount) => {
    const oneAwayFromComboLength = remainingCount == 1;

    // For each element that remaines to be added to the working combination.
    for (let sourceIndex = currentIndex; sourceIndex < sourceLength; sourceIndex++) {
      // Get next (possibly partial) combination.
      const next = [ ...workingCombo, sourceArray[sourceIndex] ];

      if (oneAwayFromComboLength) {
        // Combo of right length found, save it.
        combos.push(next);
      }
      else {
        // Otherwise go deeper to add more elements to the current partial combination.
        makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
      }
        }
  }

  makeNextCombos([], 0, comboLength);

  return combos;
}

// Function to divide an array into k
// parts such that the sum of difference
// of every element with the maximum element
// of that part is minimum
function divideArray(arr, k)
{
  const n = arr.length;

  // Dp to store the values
  var dp = Array.from(Array(n+1), () => Array(n+1).fill(0));

  k -= 1;

  // Fill up the dp table
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= k; j++) {
      // Intitilize maximum value
      dp[i][j] = Number.MAX_SAFE_INTEGER;

      let max_ = Number.MIN_SAFE_INTEGER;
      let sum = 0;

      // Run a loop from i to n
      for (var l = i; l < n; l++) {
        // Find the maximum number
        // from i to l and the sum
        // from i to l
        max_ = Math.max(max_, arr[l]);
        sum += arr[l];

        // Find the sum of difference
        // of every element with the
        // maximum element
        let diff = (l - i + 1) * max_ - sum;

        // If the array can be divided
        if (j > 0)
          dp[i][j]
              = Math.min(dp[i][j],
                    diff + dp[l + 1][j - 1]);
        else
            dp[i][j] = diff;
      }
    }
  }
  console.log(dp);

  // Returns the minimum sum
  // in K parts
  return dp[0][k];
}
 
// Driver code
var arr = [2, 9, 5, 4, 8, 3, 6, 45, 63, 4, 2, 1, 943, 3 ];
var k = 1;
console.log(divideArray(arr, k));

function sumsOfFour(n) {
  return 0;
}

console.log();

// console.log(generateCombinations([1,2,3,4,5,6,7], 4));
let allSubarrays = (arr) => {
  if (!arr.length) return [[]];
  let [head, ...rest] = arr;

  let basicCombos = allSubarrays(rest);
  let basicCombosWithHead = [];

  basicCombos.forEach( c => {
    
  })

}

console.log(allSubarrays([1,2,3,4]));
module.exports = sumsOfFour;


// [ [ 4 ] ] // base case, rest is []
// [ [ 4 ], [ 4, 3 ], [ 3 ] ]  // NEXT ITERATION
//     ^                       // previous step result
//             ^               // add head to the end of everything in above step
//                      ^      // finally append [head]
// [ [ 4 ], [ 4, 3 ], [ 3 ], [ 4, 2 ], [ 4, 3, 2 ], [ 3, 2 ], [ 2 ] ]
//     ^       ^        ^                                            // previous step result
//                               ^           ^          ^            // add head to the end of everything in above step
//                                                              ^    // finally append [head]
// [ [ 4 ], [ 4, 3 ], [ 3 ], [ 4, 2 ], [ 4, 3, 2 ], [ 3, 2 ], [ 2 ], [ 4, 1 ], [ 4, 3, 1 ], [ 3, 1 ], [ 4, 2, 1 ], [ 4, 3, 2, 1 ], [ 3, 2, 1 ], [ 2, 1 ], [ 1 ] ]

// let allSubarrays = ([head,...rest]) => !rest.length ? [[head]] // base case
//                : (
//                  sa = allSubarrays(rest), // recurse
//                  console.log(sa), // debugging output
//                  sa.concat(
//                    sa.map(e => e.concat(head)), // add first to the end of everything and then add a new element of just [first]
//                    [[head]]
//                    )
//                  );