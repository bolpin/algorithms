const { visitLexicalEnvironment } = require("typescript");

class MaxHeap {
  constructor() {
    this.data = [Number.MAX_SAFE_INTEGER];
    this.size = this.data.length-1;
  }

  #isLess(i, j) {
    return this.data[i] < this.data[j];
  }

  #exch(i, j) {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }

  insert(val) {
    this.size++;
    this.data[this.size] = val;
    this.#restoreUp(this.size);
  }

  #restoreUp(i) {
    while (this.#isLess(Math.floor(i/2), i)) {
      this.#exch(Math.floor(i/2), i);
      i = Math.floor(i/2);
    }
  }

  deleteRoot() {
    if (this.size === 0) {
      throw "Heap is empty";
    }
    const result = this.data[1];
    this.#exch(1, this.size)
    this.size--;
    this.data[this.size+1] = null;
    this.#restoreDown(1);
    return result;
  }

  #restoreDown(i) {
    while (2*i <= this.size) {
      let j = 2*i;
      if (j < this.size && this.#isLess(j, j+1)) {
        j++;
      }
      if (!this.#isLess(i, j)){
        break;
      }
      this.#exch(i, j);
      i = j;
    }
  }

  print() {
    console.log(JSON.stringify(this.data));
  }

  printHeap() {
    const NULL_ELEM = '--';
    let nodesAtThisDepth = 1;
    let spacingThisDepth;
    for (let i = 1; i <= this.data.length; ) {
      spacingThisDepth = Math.floor(3 * this.data.length / nodesAtThisDepth);
      for(let j = 0; j < nodesAtThisDepth; j++) {
        process.stdout.write(`${new Array(spacingThisDepth).join(' ')}`);
        process.stdout.write(`${this.#indexIsEmpty(i) ? NULL_ELEM : this.data[i]}`);
        i++;
      }
      process.stdout.write('\n');
      nodesAtThisDepth *= 2;
    }
  }
  
  #indexIsEmpty(j) {
    return this.data[j] === undefined || this.data[j] === null;
  }

  isEmpty() {
    return this.size < 1
  }
}

module.exports = { MaxHeap };
let heap = new MaxHeap();

// let origAr = [15,98,12,70,47,86,30,48,70,82];
// for (let i = 0; i < origAr.length; i++) {
//   heap.insert(origAr[i]);
// }

let origAr = [];
for (let i = 10; i > 0; i--) {
  const val = Math.floor(Math.random() * 100);
  origAr.push(val);
  heap.insert(val);
}

let sortedAr = origAr.sort( (a,b) => b - a );
console.log(sortedAr);
heap.print();
// heap.printHeap();


let heapSorted = [];

while (!heap.isEmpty()) {
  heapSorted.push(heap.deleteRoot())
}
console.log(heapSorted);
console.log('- - - - -')


console.log(JSON.stringify(heapSorted) === JSON.stringify(sortedAr));

// console.log(heapSorted);
// console.log(sortedAr);
// console.log(origAr);