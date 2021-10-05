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

function matrix(n) {
	let matrix = new Array(n).fill('0');
	for (let i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill('0');
	}
	let val = 1; // this is the value to be placed

	let minCol = 0;
	let maxCol = n-1;
	let minRow = 0; 
	let maxRow = n-1;

	while (minCol <= maxCol && minRow <= maxRow) {
		for(let i = minCol; i <= maxCol; i++) {
			matrix[minRow][i] = val;
			val++;
		}
		minRow++;

		for(let i = minRow; i <= maxRow; i++) {
			matrix[i][maxCol] = val;
			val++;
		}
		maxCol--;

		for(let i = maxCol; i >= minCol; i--) {
			matrix[maxRow][i] = val;
			val++;
		}
		maxRow--;

		for (let i = maxRow; i >= minRow; i--) {
			matrix[i][minCol] = val;
			val++;
		}
		minCol++;
	}
	console.log(matrix)
	return matrix;
}













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
