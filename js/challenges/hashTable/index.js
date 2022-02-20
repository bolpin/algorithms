// - Directions

class HashTable {

  constructor(size = 16) {
    this.numPairs = 0;
    this.tableSize = size;
    // this.keys = new Array(this.tableSize);
    this.values = new Array(this.tableSize);
  }

  put(key, value) {
    const h = this.#hash(key)
    if(!values[h]) {
      values[h] = new LinkedList();
    }
    values[h].insertHead(value)
  }

  get(key) {
  }

  #hash(key) {
    return (this.#cyrb53(JSON.stringify(key)) & 0x7fffffff) % this.tableSize;
  }

  #cyrb53(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
  }

  #resize(newSize) {
    let newHT = new HashTable(newSize);
    for (let i = 0; i < this.tableSize; i++) {
      if(this.keys[i]) {
        newHT.put(this.keys[i], this.values[i]);
      }
    }
    this.keys = newHT.keys;
    this.values = newHT.values;
    this.tableSize = newHT.tableSize;
  }

}

module.exports = { HashTable };
  // put(key, value) {
  //   if (this.numPairs >= this.tableSize/2) {
  //     this.#resize(2*this.tableSize);
  //   }
  //   let i;
  //   for (i = this.#hash(key); keys[i]; i = Math.floor((i+1)/this.tableSize)) {
  //     if (this.keys[i]);
  //   }
  // }
