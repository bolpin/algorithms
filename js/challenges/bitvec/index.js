// --- Directions
// implement a bit vector


// let bvec = new BitVector(20);

// bvec.print();
// console.log('setting 0');
// bvec.set(0);
// bvec.print();
// console.log('setting 8');
// bvec.set(8);
// bvec.print();
// console.log('setting 9');
// bvec.set(9);
// bvec.print();
// console.log('unsetting 9')
// bvec.unset(9);
// bvec.print();
// console.log('unsetting 8')
// bvec.unset(8);
// bvec.print();


class BitVector {
	constructor(size) {
		this.bitsPerElement = 8
		this.data = new Int8Array(Math.ceil(size/this.bitsPerElement)).fill(0);
		this.size = size;
	}

	set(idx) {
		if (idx >= this.size || idx < 0) {
			throw new Error("index out of range");
		}
		// the index in the number array
		const i = Math.floor(idx/this.bitsPerElement);
		const mask = 1 << (idx % this.bitsPerElement); 
		this.data[i] = this.data[i] | mask;
	}

	unset(idx) {
		if (idx >= this.size || idx < 0) {
			throw new Error("index out of range");
		}
		const i = Math.floor(idx/this.bitsPerElement);
		const mask = 1 << (idx % this.bitsPerElement); 
		this.data[i] = this.data[i] & (~mask)
	}

	get(idx) {
		if (idx >= this.size || idx < 0) {
			throw new Error("index out of range");
		}
		const i = Math.floor(idx/this.bitsPerElement);
		const mask = 1 << (idx % this.bitsPerElement); 
		return (this.data[i] & mask) >> (idx % this.bitsPerElement) 
	}

	length() {
		return this.size;
	}

	clear() {
		return this.data.fill(0);
	}

	print() {
		const ar = [];
		for (let i = 0; i < this.size; i++) {
			if (this.get(i)) {
				ar.push('1');
			} else {
				ar.push('_');
			}
			if ((i+1) % this.bitsPerElement === 0) {
				ar.push('|');
			}
			if ((i+1) % this.bitsPerElement * 4 === 0) {
				ar.push('\n');
			}
		}
		console.log('[ ' + ar.join(' ') + ' ]');
		console.log(this.data);
	}
}

module.exports = BitVector;


// class BitVector {
// 	constructor(size) {
// 		this.bitsPerElement = 8
// 		this.data = new Int8Array(Math.ceil(size/this.bitsPerElement)).fill(0);
// 		this.size = size;
// 	}

// 	set(idx) {
// 		if (idx >= this.size || idx < 0) {
// 			throw new Error("index out of range");
// 		}
// 		// the index in the number array
// 		const i = Math.floor(idx/this.bitsPerElement);
// 		const mask = 1 << (idx % this.bitsPerElement); 
// 		this.data[i] = this.data[i] | mask;
// 	}

// 	unset(idx) {
// 		if (idx >= this.size || idx < 0) {
// 			throw new Error("index out of range");
// 		}
// 		const i = Math.floor(idx/this.bitsPerElement);
// 		const mask = 1 << (idx % this.bitsPerElement); 
// 		this.data[i] = this.data[i] & (~mask)
// 	}

// 	get(idx) {
// 		if (idx >= this.size || idx < 0) {
// 			throw new Error("index out of range");
// 		}
// 		const i = Math.floor(idx/this.bitsPerElement);
// 		const mask = 1 << (idx % this.bitsPerElement); 
// 		return (this.data[i] & mask) >> (idx % this.bitsPerElement) 
// 	}

// 	length() {
// 		return this.size;
// 	}

// 	clear() {
// 		return this.data.fill(0);
// 	}

// 	print() {
// 		const ar = [];
// 		for (let i = 0; i < this.size; i++) {
// 			if (this.get(i)) {
// 				ar.push('1');
// 			} else {
// 				ar.push('_');
// 			}
// 			if ((i+1) % this.bitsPerElement === 0) {
// 				ar.push('|');
// 			}
// 			if ((i+1) % this.bitsPerElement * 4 === 0) {
// 				ar.push('\n');
// 			}
// 		}
// 		console.log('[ ' + ar.join(' ') + ' ]');
// 		console.log(this.data);
// 	}
// }

module.exports = BitVector;

