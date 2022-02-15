const { MaxHeap } = require('./index');

const heap = new MaxHeap();
const origAr = [15,98,12,70,47,86,30,48,70,82];
for (let i = 0; i < origAr.length; i++) {
  heap.insert(origAr[i]);
}


test('maintains heap order during heapsort', () => {
  const heapsortResult = [];
  while (!heap.isEmpty()) {
    heapsortResult.push(heap.deleteRoot());
  }

  // const expectedResult = [98, 86, 82, 71, 70, 48, 47, 30, 15, 12];
  const expectedResult = origAr.sort( (a,b) => b - a );
  expect(JSON.stringify(expectedResult)).toEqual(JSON.stringify(heapsortResult));
});


// let origAr = [];
// for (let i = 10; i > 0; i--) {
//   const val = Math.floor(Math.random() * 100);
//   origAr.push(val);
//   heap.insert(val);
// }

// let sortedAr = origAr.sort( (a,b) => b - a );
// console.log(sortedAr);
// heap.print();
// // heap.printHeap();


// let heapSorted = [];

// while (!heap.isEmpty()) {
//   heapSorted.push(heap.deleteRoot())
// }
// console.log(heapSorted);
// console.log('- - - - -')


// console.log(JSON.stringify(heapSorted) === JSON.stringify(sortedAr));

// // console.log(heapSorted);
// // console.log(sortedAr);
// // console.log(origAr);
