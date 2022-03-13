// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 3 -> _ _ # _ _
// 3 -> _ # # # _
// 3 -> # # # # #

// 2 -> _ # _
// 2 -> # # #

// recursive
function pyramidLevel(arr, step) {
  const brick = '#';
  const midpoint = Math.floor(arr.length / 2);
  // halt condition
  if (step > midpoint ) {
    return;
  }
  arr[midpoint + step] = brick;
  arr[midpoint - step] = brick;
  console.log(arr.join(''));
  // recursive call
  return pyramidLevel(arr, step + 1)
}

function pyramid(n) {
  const size = 2*n - 1;
  let arr = new Array(size).fill(' ');
  pyramidLevel(arr, 0)
}


// RECURSIVE SOLUTION
// function pyramidLevel(ar, step) {
//   const brickSymbol = '#'
//   // const midpoint = n - 1;
//   const midpoint = Math.floor(ar.length / 2);
//   if (step > midpoint) {
//     return;
//   }
//   ar[midpoint + step] = brickSymbol;
//   ar[midpoint - step] = brickSymbol;
//   console.log(ar.join(''));
//   pyramidLevel(ar, step+1)
// }

// function pyramid(n) {
//   const size = 2*n - 1;
//   const ar = new Array(size).fill(' ');
//   const step = 0;
//   pyramidLevel(ar, step);
// }

module.exports = pyramid;