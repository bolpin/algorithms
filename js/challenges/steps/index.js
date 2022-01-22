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

function oneStep(ar, level) {
  // exit condition
  if (level >= ar.length) {
    return;
  }

  // do it
  ar[level] = '#';
  console.log(ar.join(''));

  // recursive call
  oneStep(ar, level + 1);
}

function steps(n) {
  let ar = new Array(n).fill(' ');
  oneStep(ar, 0);
}

// try recursive next
// function steps(n) {
//   const arr = new Array(n).fill(' ');
//   for (let i = 0; i < n; i++) {
//     arr[i] = '#';
//     console.log(arr.join(''));
//   }
// }


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
