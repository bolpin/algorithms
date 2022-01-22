// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const { arrayTypeAnnotation } = require("@babel/types");

// r  R  c  C
// +
//          -
//    -
//       +
// 0, 3, 0, 3 a
// 1, 3, 0, 3 d
// 1, 3, 0, 2 b
// 1, 2, 0, 2 u
// 1, 2, 1, 2 a
// 2, 2, 1, 2 d
// 2, 2, 1, 1 b 
// 2, 1, 1, 1 DONE

function matrix(n) {

  const matrix = [];
  for(let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let minX = 0;
  let minY = 0;
  let maxX = n-1;
  let maxY = n-1;
  let val = 1;

  while (minX <= maxX && minY <= maxY) {
    for (let i = minX; i <= maxX; i++) {
      matrix[minY][i] = val;
      val++;
    }
    minY++;

    for (let i = minY; i <= maxY; i++) {
      matrix[i][maxX] = val;
      val++;
    }
    maxX--;

    for (let i = maxX; i >= minX; i--) {
      matrix[maxY][i] = val;
      val++;
    }
    maxY--;

    for (let i=maxY; i >= minY; i--) {
      matrix[i][minX] = val;
      val++;
    }
    minX++;
  }
	return matrix;

}

// let m = matrix(4);
// console.log(m)










// function matrix(n) {
//     let spiral = [];

//     let minCol = 0;
//     let minRow = 0;
//     let maxCol = n-1;
//     let maxRow = n-1;

//     for(let i = 0; i < n; i++) {
//         spiral.push(new Array(n));
//     }

//     let val = 1;

//     while( minCol <= maxCol && minRow <= maxRow) {
//         // go right across top
//         for (let col = minCol; col <= maxCol; col++) {
//             spiral[minRow][col] = val;
//             val++;
//         }
//         minRow++;

//         // go down the right side
//         for (let row = minRow; row <= maxRow; row++) {
//             spiral[row][maxCol] = val;
//             val++;
//         }
//         maxCol--;

//         // go left across the bottom
//         for (let col = maxCol; col >= minCol; col--) {
//             spiral[maxRow][col] = val;
//             val++;
//         }
//         maxRow--;

//         // go up along the left side
//         for (let row = maxRow; row >= minRow; row--) {
//             spiral[row][minCol] = val;
//             val++;
//         }
//         minCol++;
//     }

//     return spiral;
// }

// SOLUTION


module.exports = matrix;
