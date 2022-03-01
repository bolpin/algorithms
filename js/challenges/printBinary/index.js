class BaseNumber{
  constructor(n) {
    this.ar = new Uint32Array(2);
    this.ar[0] = n;
    console.log()
    console.log(`setting : ${n}  ${this.ar[0]}`)
    this.ar[1] = ~this.ar[0];
  }
  
  
  get(idx = 0) {
    return this.ar[idx];
  }

  bitArray(idx = 0) {
    const ar = [];
    for (let i = 0; i < 32; i++) {
      if (1 & (this.get(idx) >> i)) {
        ar.push(1)
      } else {
        ar.push(0)
      }
    }
    return ar;
  }

  log(idx = 0) {
    console.log(this.get(0));
    this.logAsBinary(0);
    this.logAsBinary(1);
    console.log(`flipped : ${this.flippedVal()}`)
  }

  logAsBinary(idx = 0) {
    console.log(this.bitArray(idx).join(''));
  }

  flippedVal() {
    return this.ar[1];
  }
}

new BaseNumber(2147483647).log()
new BaseNumber(2147483648).log()
new BaseNumber(1).log()
new BaseNumber(4294967294).log()
new BaseNumber(0).log()
new BaseNumber(4294967295).log()
// new BaseNumber(Number.MAX_SAFE_INTEGER).log()
// new BaseNumber(Number.MIN_SAFE_INTEGER).log()
// new BaseNumber(Number.POSITIVE_INFINITY).log()
// new BaseNumber(Number.NEGATIVE_INFINITY).log()