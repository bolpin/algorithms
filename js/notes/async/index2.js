// --- Directions

// Javascript engines are built on the concept of a single-
// threaded event loop.
// They maintain a job queue, in lieu of threads.
// The event loop is the part of the js engine that monitors
// code execution and manages the job queue.

// Node.js popularized callbacks for async programming. This
// Node.js popularized callbacks for async programming. This
// led to the "callback-hell" of too-deeply nested callbacks.

// Promises are PLACEHOLDERS for the result of an async
// operation.
// e.g. let promise = readFile("foo.txt");

// Promise lifecycle:
// 0. A promise is created; it is pending, or unsettled
// 1. When the async operation completes, the promise
//    is "settled", and enters either a Fulfilled
//    or Rejected state.

// New promises are created using the Promise constructor.
// It takes a single argument: a function called the 'executor'.
// The executor is passed two functions named 'resolve()' and
// 'reject()' as arguments.

// Two functions provide ways to handle multiple promises:
// Promise.all(arr) and Promise.race(arr)

let p1 = new Promise(function(resolve, reject) {
  resolve(1);
});

let p2 = new Promise(function(resolve, reject) {
  resolve(2);
})

let p3 = Promise.all([p1, p2]);

p3.then(function(val) {
  Array.isArray(value) // true
  value[0] // 1
  value[1] // 2
})

// ----------------------------------------

let p1 = new Promise(function(resolve, reject) {
  resolve(1);
});

let p2 = new Promise(function(resolve, reject) {
  resolve(2);
})

let p3 = new Promise(function(resolve, reject) {
  reject(3);
})

p3.then(function(val) {
  Array.isArray(value) // false
  value // 3
})


const fs = require('fs');
  
function readSomething(filename) {
    return new Promise(function(myResolveFunc, myRejectFunc) {
        console.log("checkpoint 2");
        // trigger the async operation
        fs.readFile(filename,
                    { encoding: 'utf8'},
                    function(err, contents) {
            // check for errors
            if (err) {
                myRejectFunc(err);
                return;
            }
            myResolveFunc(contents);
        });
    });
}

console.log("checkpoint 1");
let promise = readSomething('async/test.js');
console.log("checkpoint 3");

// listen for both fulfillment and rejection
promise.then(function(contents) {
    // fulfillment
}, function(err) {
    // rejection
});
console.log("checkpoint 4");

// The Promise constructor is the best way to create an
// unsettled promise.
// To easily create settled promises, you can use:
let prom1 = Promise.resolve(42);
prom1.then(function(value) {
    // do something with value (42)
    console.log(42);
});
// - or -
let prom2 = Promise.reject(55);
prom2.catch(function(value) {
    // do something with value (55)
    console.log(value);
});

// fs.readFile('async/test.js', 'utf8', function(err, data){
//     console.log(data.slice(0, 40));
// });

// ALWAYS attach a rejection handler to a then() call.
// Otherwise, errors will be silent.

// the promise.catch(fn(err)) method on a promise is equivalent to 
// promise.then(nulll, fn(err))

//
function funWithPromises() {
    return;
}

funWithPromises();

module.exports = funWithPromises;