
// "compare adjacent neighbors"
// in-place (memory O(1))
// stable
// lots of swaps
// best/avg/worst = 1/n^2/n^2 (with numSwaps optimization)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}

// "prove me wrong"
// in-place (memory O(1))
// fewer swaps than bubble sort
// unstable
// best/avg/worst = n^2/n^2/n^2
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    if (minimumIndex !== i) {
      let tmp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = tmp;
    }
  }
  return arr;
}

// Highly parallelizable
// stable
// not in-place; uses a fair amount of memory (O(n))
// best/avg/worst = nlog(n)/nlog(n)/nlog(n) 
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length/2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// function mergeSort(arr) {
// 	console.log(arr);
// 	if (arr.length === 1) {
// 		return arr;
// 	}

// 	let center = Math.floor(arr.length / 2);
// 	let left = arr.slice(0, center);
// 	let right = arr.slice(center);
// 	console.log(left);
// 	console.log(right);
// 	console.log('');

// 	return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
// 	const result = [];

// 	while(left.length && right.length) {
// 		if (left[0] < right[0]) {
// 			result.push(left.shift());
// 		} else {
// 			result.push(right.shift());
// 		}
// 	}

// 	return [...result, ...left, ...right];
// }



// function bubbleSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length - i; j++) {
// 			if (arr[j] > arr[j+1]) {
// 				const tmp = arr[j+1];
// 				arr[j+1] = arr[j];
// 				arr[j] = tmp;
// 			}
// 		}
// 	}

// 	return arr;
// }


// function selectionSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let indexOfMin = i;
// 		for (let j = i+1; j < arr.length; j++) {
// 			if (arr[j] < arr[indexOfMin]) {
// 				indexOfMin = j;
// 			}
// 		}
// 		if (indexOfMin !== i) {
// 			let tmp = arr[i];
// 			arr[i] = arr[indexOfMin];
// 			arr[indexOfMin] = tmp;
// 		}
// 	}

// 	return arr;
// }
