// --- Directions

function foo() {
    console.log(arguments); // { '0': [ 'Brian', 'was' ], '1': 'here' }
}

function ec5MakeArray(arrayLikeThing) {
    return Array.prototype.slice.call(arrayLikeThing);
}

function funWithArrays() {
    let ar = Array.of(1,2,3,4);
    console.log(ar);

    let set = new Set([3,6,9]);
    console.log(set);

    // EC5 way to convert an array-like object to an array:
    let numbers = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    }


    console.log("-->")

    // mapping conversion:
    let numbers2 = Array.from(numbers, (value) => value * 10);
    console.log(numbers2);

    let ar2 = ec5MakeArray(set);
    console.log(typeof ar2);
    console.log(ar2);
    
    // EC6
    console.log(Array.from(set))

    foo(['Brian', 'was'], "here"); 

    const ar3 = [1,3,5,7,9,11,13];
    console.log(ar3.find(n => n > 6));
    console.log(ar3.findIndex(n => n > 6));

    ar3.fill(-1);
    console.log(ar3);

    ar3.fill('Brian', 1, 3);
    console.log(ar3);

    let ar4 = Array.of('a', 'b', 'c', 'd', 'e');
    console.log(ar4);
    ar4.copyWithin(2);
    console.log(ar4);
    console.log(ar4.length);
    console.log(ar4.byteLength); // undefined

    let arrBuf = new ArrayBuffer(10); // allocate 10 bytes
    console.log(arrBuf.byteLength);

    let view1 = new DataView(arrBuf, 5, 2); // view of bytes 5 and 6
    console.log(view1.buffer === arrBuf); // true
    console.log(view1.byteOffset); // 5
    console.log(view1.byteLength); // 2
    view1.setInt8(0, 5);  // byte 0: 00000101
    view1.setInt8(1, -1); // byte 1: 11111111
    console.log(view1.getInt8(0)); // 5 
    console.log(view1.getInt8(1)); // -1
    console.log(view1.getInt16(0)); // 1545  (00000101 11111111)

    // TYPED ARRAYS (they are NOT arrays; see differences, below)
    let floats = new Float32Array(2);
    console.log(floats.byteLength); // 8
    console.log(floats.length); // 2

    let ints1 = new Int32Array([25, 50]);
    console.log(ints1.byteLength); // 8
    console.log(ints1.length); // 2

    // analagous methods between typed arrays and arrays:
    // (NOTE typed arrays have additional type-checking, so
    // the methods are not equivalent)
    // copyWithin()
    // entries()
    // fill()
    // filter()
    // find()
    // findIndex()
    // forEach()
    // indexOf()
    // join()
    // keys()
    // lastIndexOf()
    // map()
    // reduce()
    // reduceRight()
    // reverse()
    // slice()
    // some()
    // sort()
    // values()
    // And 3 common iterators:
    //   entries()
    //   keys()
    //   values()
    // And 2 common static methods:
    //   <type>.of()
    //   <type>.from()

    // Example of maintaining type, after mapping:
    let mapped = ints1.map(i => i + 3);
    console.log(mapped); // Int32Array(2) [ 28, 53 ]
    console.log(mapped instanceof Int32Array); // true;

    // DIFFERENCES: 
    // Regular arrays grow and shrink, typed arrays always maintain size
    //
    // Also, typed arrays DON'T have:
    // push()
    // pop()
    // shift()
    // unshift()
    // splice()
    // concat()
    
    // Also, typed arrays have two methods not available on regular arrays:
    // set()
    // subarray()

    let int32s = new Int32Array(4);
    int32s.set([10, 20]);
    int32s.set([3, 6], 2);
    console.log(int32s.toString()); // 10,20,3,6
    console.log(int32s.subarray()); // Int32Array(4) [ 10, 20, 3, 6 ]
    console.log(int32s.subarray(2)); // Int32Array(2) [ 3, 6 ]
    console.log(int32s.subarray(1, 3)); // Int32Array(2) [ 20, 3 ]
}

funWithArrays();

module.exports = funWithArrays;