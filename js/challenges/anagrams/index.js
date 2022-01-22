// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const buildCharMap = (str) => {
	return map;
}

const clean = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

// console.log(anagrams("a$$$b", "b . @@a" )) 

module.exports = anagrams;



// SIMPLE SOLUTION - PERFORMANCE RISK
// const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// SOLUTION 2
// function buildCharMap(str) {
//     let map = {}
//     for (let c of str) {
//         if(map[c]) {
//             map[c] += 1;
//         } else {
//             map[c] = 1;
//         }
//     }
//     return map;
// }
// function anagrams(stringA, stringB) { // JS is pass-by-value
// let aChars = buildCharMap(stringA.replace(/[^\w]/g, "").toLowerCase());
// let bChars = buildCharMap(stringB.replace(/[^\w]/g, "").toLowerCase());

// if (Object.keys(aChars).length !== Object.keys(bChars).length) {
//     return false;
// }
// for (let key in aChars) {
//     if (aChars[key] !== bChars[key]) {
//         return false;
//     }
// }
// return true;


    // SOLUTION 1
    // let aChars = {};

    // const a = stringA.replace(/[^\w]/g, "").toLowerCase();
    // const b = stringB.replace(/[^\w]/g, "").toLowerCase();

    // for (let c of a) {
    //     if(aChars[c]) {
    //         aChars[c] += 1;
    //     } else {
    //         aChars[c] = 1;
    //     }
    // }
    // for (let c of b) {
    //     if (!aChars[c]) {
    //         return false;
    //     }
    //     if (aChars[c] > 0) {
    //         aChars[c] -= 1;
    //     } else {
    //         return false;
    //     }
    // }
    // for (let key in aChars) {
    //     if (aChars[key]!== 0) {
    //         return false;
    //     }
    // }
    // return true;
