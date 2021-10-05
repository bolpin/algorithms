// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'




// try recursive next
function steps(n) {
	for (let i = 0; i < n; i++) {
		const blocks = new Array(i+1).fill('#');
		const spaces = new Array(n-i-1).fill(' ');
		console.log([...blocks, ...spaces].join(''));
	}
}


// steps(4);

	// for (let i = 0; i < n; i++) {
	// 	const steps = new Array(i+1).fill('#')
	// 	const spaces = new Array(n-1-i).fill(' ')
	// 	console.log([...steps, ...spaces].join(''))
	// }

// let start = new Date().getTime();
// var end = new Date().getTime();
// console.log(`execution took ${end - start}`);

// RECURSIVE SOLN 1
// function printStep(arr, i) {
//     if (i <= 0) {
//         return;
//     }
//     else {
//         arr[arr.length-i] = '#';
//         console.log(arr.join(''));
//         printStep(arr, i-1)
//     }
// }

// function steps(n) {
//     printStep(new Array(n).fill(' '), n);
// }

    // SOLN 2
    // for (let row = 0; row < n; row++) {
    //     let str = '';
    //     for (let col = 0; col < n; col++) {
    //         if (col <= row) {
    //             str += "#";
    //         } else {
    //             str += " ";
    //         }
    //     }
    //     console.log(str);
    // }
    // return;

    // SOLUTION 1
    // for(let i = 1; i <= n; i++) {
    //     let ar = new Array(n).fill(' ');
    //     for (let j = 0; j < i; j++) {
    //         ar[j] = '#';
    //     }
    //     console.log(ar.join(''));
    // }
    // return;

module.exports = steps;
