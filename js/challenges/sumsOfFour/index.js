// --- Directions
// return an ordered array of all
// the sums of combinations of four
// from the input array
//
// Assume the input is an array of numbers
// of length >= 4


let allSubarrays = (arr) => {
  return [[]];
}

// console.log(allSubarrays([1,2,3,4]));



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