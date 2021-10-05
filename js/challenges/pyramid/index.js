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

const steps = require("../steps");

// 3 -> _ _ # _ _
// 3 -> _ # # # _
// 3 -> # # # # #

// 2 -> _ # _
// 2 -> # # #

function pyramid(n) {
	// const width = 2*n-1;
	for (let i = 0; i < n; i++) {
		const space = new Array(n-1-i).fill(' ');
		const bricks = new Array(1 + (2*i)).fill('#');
		console.log([...space, ...bricks, ...space].join(''));
	}
	return;
}


pyramid(4);
// RECURSIVE SOLUTION
// function pyramid(n, row='', layer=0) {
//     if(layer === n) { return; }
//     const strLen = 2*n - 1;
//     const midPoint = Math.floor(strLen/2);

//     let col = row.length;
//     if (col === strLen) {
//         console.log(row);
//         return pyramid(n, '', layer + 1);
//     }

//     if (col >= midPoint - layer && col <= midPoint + layer) {
//         row += '#';
//     } else {
//         row += ' ';
//     }

//     return pyramid(n, row, layer);
// }



module.exports = pyramid;