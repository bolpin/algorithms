// A heap, or priority queue, is a full binary tree with
// two defining characteristics:
// 1. Shape
//    A valid heap is a complete binary tree with all 
//    levels full except perhaps the last level.  The
//    last level is filled from left to right.
//    e.g.
//
//       *      or      *      or       *      
//    *     *        *     *         *     *   
//   *              * *             * *   *    
//
// 2. Order
//    For, say, a MaxHeap, the child or children of every
//    node are less than or equal to that node.
//
// GenericHeap is a level-order array implementation of a
// binary tree that maintains the two above properties via
// private methods restoreUp and restoreDown.
// For example, the children of node[i] are node[2*1] and
// node[2*i + 1].

class GenericHeap {
  constructor() {
    // Data starts at index 1, to simplify the restore-heap code
    this.data = [null];
    this.size = this.data.length-1;

    // max-heap by default; override comparator for min-heap
    this.comparator = (i,j) => this.data[i] < this.data[j];
  }

  isEmpty() {
    return this.size < 1
  }

  insert(val) {
    this.size++;
    this.data[this.size] = val;
    this.#restoreUp(this.size);
  }

  insertArray(ar) {
    for(const val of ar) {
      this.insert(val);
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

  // restore heap order
  #restoreUp(i) {
    while (i > 1 && this.comparator(Math.floor(i/2), i)) {
      this.#exch(Math.floor(i/2), i);
      i = Math.floor(i/2);
    }
  }

  // restore heap order
  #restoreDown(i) {
    while (2*i <= this.size) {
      let j = 2*i;
      if (j < this.size && this.comparator(j, j+1)) {
        j++;
      }
      if (!this.comparator(i, j)){
        break;
      }
      this.#exch(i, j);
      i = j;
    }
  }

  print() {
    const NULL_ELEM = '--';
    let nodesAtThisDepth = 1;
    let spacingThisDepth;
    for (let i = 1; i <= this.data.length; ) {
      const spacingFactor = 3;
      spacingThisDepth = Math.floor(spacingFactor * this.data.length / nodesAtThisDepth);
      for(let j = 0; j < nodesAtThisDepth; j++) {
        process.stdout.write(`${new Array(spacingThisDepth).join(' ')}`);
        process.stdout.write(`${this.#indexIsEmpty(i) ? NULL_ELEM : this.data[i]}`);
        i++;
      }
      process.stdout.write('\n');
      nodesAtThisDepth *= 2;
    }
  }

  #exch(i, j) {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }
  
  #indexIsEmpty(j) {
    return this.data[j] === undefined || this.data[j] === null;
  }

}

const MaxHeap = GenericHeap;

class MinHeap extends GenericHeap {
  constructor() {
    super()
    this.comparator = (i,j) => this.data[i] > this.data[j]
  }
}



module.exports = { MaxHeap, MinHeap, GenericHeap };