// --- Directions
// return an ordered array of all
// the sums of combinations of four
// from the input array
//
// Assume the input is an array of numbers
// of length >= 4

let sas = ([n,...ns],sa) => !ns.length ? [[n]]
                                       : (sa = sas(ns),
                                         sa.concat(sa.map(e => e.concat(n)),[[n]]));


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



function sumsOfFour(n) {
  return 0;
}

console.log(generateCombinations([1,2,3,4,5,6,7], 4));

module.exports = sumsOfFour;
