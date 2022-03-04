// --- Directions
// write a function that takes an array of numbers and returns the
// smallest positive integer (> 0) that does not appear in the
// array.

class BitVec {
  constructor(n=1028) {
    this.size = n;
    this.arrSize = Math.ceil(n/32);
    this.data = new Uint32Array(this.arrSize).fill(0);
  }

  set(n) {
    const elem = Math.floor(n / 32);
    const pos = n % 32;
    this.data[elem] = this.data[elem] | (1 << pos);
  }

  unset(n) {
    const elem = Math.floor(n / 32);
    const pos = n % 32;
    this.data[elem] = this.data[elem] ^ (1 << pos);
  }

  getAt(n) {
    const elem = Math.floor(n / 32);
    const pos = n % 32;
    return this.data[elem] & (1 << pos);
  }


   printElemAsBinary(el=0) {
     const digits = [];
     let n = this.data[el];
     for (let i = 0; i < 32; i++) {
       if (n & 1 << i) {
         digits.unshift('1');
       } else {
         digits.unshift('0');
       }
       n << 1;
     }
     // console.log(digits.join(' '));
   }

   *[Symbol.iterator]() {
    for (let n = 0; n < this.size; n++) {
      const elem = Math.floor(n / 32);
      const pos = n % 32;
      yield(this.data[elem] & (1 << pos));
    }
  }

  firstIndexSet() {
    let i = 0;
    for (let bit of this) {
      if (bit) {
        return i;
      }
      i++;
    }
  }

  firstIndexUnset() {
    let i = 0;
    for (let bit of this) {
      if (!bit) {
        return i;
      }
      i++;
    }
  }

  length() {
    return this.arrSize;
  }
}

function smallestPosIntOmitted(arr) {
  const bv = new BitVec(100000000);
  // console.log(bv.length());

  for (let n of arr) {
    if (n > 0) {
      bv.set(n-1);
    }
  }
  return bv.firstIndexUnset() + 1;
}

function smallestPosIntOmitted2(arr) {
  let sortedPositives = arr.filter(x => x > 0).sort((a,b) => a-b);
  if (sortedPositives.length === 0) {
    return 1;
  }
  let last = 0;

  while(sortedPositives.length) {
    let num = sortedPositives.shift();
    let diff = num-last;
    if (diff > 1) {
      return last+1;
    }
    last = num;
  }
  return last+1;
}


module.exports = { smallestPosIntOmitted };

