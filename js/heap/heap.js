// to run tests:
// jest test.js --watch

class Heap {
  constructor(maxSize=1000) {
    this.size = 0;
    this.maxSize = maxSize;
    this.data = new Array(maxSize).fill(0);

    // Sentinel value to make the restoreUp logic simpler
    this.data[0] = Number.MAX_SAFE_INTEGER;
  }

  insert(val) {
    if (this.size === this.maxSize) {
      return; // throw?
    }
    this.size++;
    this.data[this.size] = val;
    this.restoreUp(this.size);
  }

  restoreUp(index) {
    let val = this.data[index];
    let parentIndex = Math.floor(index / 2);
    while(this.data[parentIndex] < val) {
      this.data[index] = this.data[parentIndex];
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
    this.data[index] = val;
  }

  display() {
    if (this.size === 0) {
      console.log("Heap is empty");
      return;
    }
    console.log(`Size: ${this.size}`);
    console.log(this.data.slice(1, this.size + 1));
  }

  restoreDown(index) {
    let val = this.data[index];
    let lChildIndex = index * 2;
    let rChildIndex = lChildIndex + 1;

    while (rChildIndex <= this.size) {
      if (val >= this.data[lChildIndex] && val >= this.data[rChildIndex]) {
        this.data[index] = val;
        // heap order property is good 
        return;
      } else {
        if (this.data[lChildIndex] > this.data[rChildIndex]) {
          // Left child is too big
          this.data[index] = this.data[lChildIndex];
          index = lChildIndex;
        } else {
          // Right child is too big
          this.data[index] = this.data[rChildIndex];
          index = rChildIndex;
        }
      }
      lChildIndex = 2 * index;
      rChildIndex = lChildIndex + 1;
    }

    if (lChildIndex === this.size && val < this.data[lChildIndex]) {
      // current node has no right child, AND is too small
      this.data[index] = this.data[lChildIndex];
      index = lChildIndex;
    }
    this.data[index] = val;
  }

  remove() {
    if (this.size === 0) {
      return; // throw?
    }
    let maxValue = this.data[1];
    this.data[1] = this.data[this.size];
    this.size--;
    this.restoreDown(1);
    return maxValue;
  }

  maxValue() {
    return this.data[1];
  }

  foo() {
    return this.size;
  }

}

// const myHeap = new Heap();

// myHeap.display();
// for (let i = 0; i < 200; i++) {
//   myHeap.insert(Math.ceil(100 * Math.random()));
//   myHeap.display();
// }

// while(myHeap.getSize()) {
//   console.log(myHeap.remove());
// }

module.exports = Heap;
