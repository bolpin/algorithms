// returns the largest sum of consecutive elements
// elements might be integers, including negatives

const maxContiguousSum = function(ar) {
  let maxSum = 0;
  let sum = 0;
  for(let i = 0; i < ar.length; i++) {
    sum += ar[i];
    if (maxSum < sum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
    // console.log(`${sum}   ${maxSum}`);
  }
  return maxSum;
}



module.exports = { maxContiguousSum };

// const maxContiguousSum = function(ar) {
//   let maxSum = 0;
//   let sum = 0;
//   for(let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//     if (maxSum < sum) {
//       maxSum = sum;
//     } else if (sum < 0) {
//       sum = 0;
//     }
//     // console.log(`${sum}   ${maxSum}`);
//   }
//   return maxSum;
// }
