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
	let matrix = new Array(n);
	for (let i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill(0);
	}
	let maxCol = n-1;
	let maxRow = n-1;
	let minCol = 0;
	let minRow = 0;

	let num = 1;
	console.log(matrix);

	while (maxCol >= minCol && maxRow >= minRow) {
		// across ->
		for(let i = minCol; i <= maxCol; i++) {
			matrix[minRow][i] = num;
			num++;
		}
		minRow++;

		// down
		for(let i = minRow; i <= maxRow ;i++) {
			matrix[i][maxCol] = num;
			num++;
		}
		maxCol--;

		// across <-
		for(let i = maxCol; i >= minCol; i--) {
			matrix[maxRow][i] = num;
			num++;
		}
		maxRow--;

		// up
		for(let i = maxRow; i >= minRow; i--) {
			matrix[i][minCol] = num;
			num++;
		}
		minCol++;
	}
	
	return matrix;
}

// let m = new matrix(4);












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
