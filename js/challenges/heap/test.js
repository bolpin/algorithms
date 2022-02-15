const { MaxHeap, MinHeap, GenericHeap } = require('./heap');

const numericInputs = [15,98,12,71,0,86,30,48,70,82];

test('MinHeap establishes sort order', () => {
  const heap = new MinHeap();
  heap.insertArray(numericInputs);

  const heapsortResult = [];
  while (!heap.isEmpty()) {
    heapsortResult.push(heap.deleteRoot());
  }

  const expectedResult = [0,12,15,30,48,70,71,82,86,98];

  expect(JSON.stringify(expectedResult))
    .toEqual(JSON.stringify(heapsortResult));
});


test('MaxHeap establishes sort order', () => {
  const heap = new MaxHeap();
  heap.insertArray(numericInputs);

  const heapsortResult = [];
  while (!heap.isEmpty()) {
    heapsortResult.push(heap.deleteRoot());
  }

  const expectedResult = [98, 86, 82, 71, 70, 48, 30, 15, 12, 0];

  expect(JSON.stringify(expectedResult))
    .toEqual(JSON.stringify(heapsortResult));
});

class MyPriorityHeap extends GenericHeap {
  constructor() {
    super()
    this.comparator = (i,j) => this.data[i].p > this.data[j].p
  }
}

test('comparator can be customized for objects of a certain structure', () => {
  const objectInputs = [
    {
      p: 3,
      name: 'normal'
    },
    {
      p: 3,
      name: 'normal'
    },
    {
      p: 1,
      name: 'emergency!'
    },
    {
      p: 99,
      name: 'who cares?'
    },
    {
      p: 2,
      name: 'fairly high'
    },
    {
      p: 5,
      name: 'fairly low'
    }
  ];

  const heap = new MyPriorityHeap();
  heap.insertArray(objectInputs);

  const heapsortResult = [];
  while (!heap.isEmpty()) {
    heapsortResult.push(heap.deleteRoot().name);
  }

  const expectedResult = [
    "emergency!", 
    "fairly high", 
    "normal", 
    "normal", 
    "fairly low", 
    "who cares?"
  ];

  expect(JSON.stringify(expectedResult))
    .toEqual(JSON.stringify(heapsortResult));
});

