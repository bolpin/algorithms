const Heap = require('./heap');

// test('myFunction is defined', () => {
//   expect(typeof myFunction).toEqual('function');
// });

// test ('Math works', () => {
//   expect(2+2).toEqual(4);
// });

test('Heap is a defined class', () => {
  expect(typeof Heap.prototype.constructor).toEqual('function');
});

test('can insert elements into a heap', () => {
  const h = new Heap();
  expect(() => {
    h.insert(1);
  }).not.toThrow();
});

test('can remove elements from a heap', () => {
  const h = new Heap();
  expect(() => {
    h.insert(1);
    h.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const h = new Heap();
  h.insert(1);
  h.insert(9);
  h.insert(3);
  h.insert(8);
  h.insert(6);
  h.insert(5);
  expect(h.remove()).toEqual(9);
  expect(h.remove()).toEqual(8);
  expect(h.remove()).toEqual(6);
  expect(h.remove()).toEqual(5);
  expect(h.remove()).toEqual(3);
  expect(h.remove()).toEqual(1);
  expect(h.remove()).toEqual(undefined);
});

// test('Big inefficent test', () => {
//   for (let i = 0; i < 50; i++){
//     let testArr = [];
//     let maxHeap = new Heap();
//     console.log('----------------');
//     for (let j = 0; j < i; j++){
//       let val = Math.ceil(Math.random()*100);
//       testArr.push(val);
//       maxHeap.insert(val);
//     }
//     const expectedResult = testArr.sort((a, b) => b - a).reverse();
//     const ar = [];

//     console.log("expected:")
//     while(maxHeap.foo()) {
//       let val = maxHeap.remove();
//       ar.push(val);
//     }
//     expect(JSON.stringify(expectedResult)).toEqual(JSON.stringify(ar));
//     console.log(expectedResult);
//     console.log(ar);
//     console.log(maxHeap.display());
//   }

// });
