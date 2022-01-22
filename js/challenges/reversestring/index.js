// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reduce( (result, c) => c + result, '' )
  return str.split('').reverse().join('')
}

module.exports = reverse;

    // SOLUTION 3
    // return str.split('').reduce( (rev, c) => c + rev , '');

    // SOLUTION 1

    // let reversed = '';
    // for(let c of str) {
    //     reversed = c + reversed; 
    // }
    // return reversed;


    // SOLUTION 2
    // return str
    //     .split('')  
    //     .reverse()
    //     .join('');