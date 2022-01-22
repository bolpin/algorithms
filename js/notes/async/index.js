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

// Promises are improvements on other possible strategies, such
// as events or callbacks for their readability and reduction
// of deeply nested code ('callback hell').

// There are two skills to be mastered:
// 1. use of promises ("I want to call a long-running bit of
//    code, but not have my program block on it")
// 2. creation of promises ("I want to make it easy for clients
//    to use a long-running/async bit of logic that I'm writing
//    without blocking code")

// Promise lifecycle:
// 0. A promise is created; it is pending, or unsettled
// 1. When the async operation completes, the promise
//    is "settled", and enters either a Fulfilled
//    or Rejected state.

// New promises are created using the Promise constructor.
// It takes a single argument: a function called the 'executor'.
// The executor is passed two functions named 'resolve()' and
// 'reject()' as arguments.

// Note that the executor returns immediately.  Conversely, when
// either resolve() or reject() is called within the executor, a
// new job is added to the JS job queue ("Job scheduling").  This
// job runs asynchrounously

// Note that any JS object that implements a then(resolveFn,
// rejectFn) method is a "thenable", and can be passed as
// arguments to Promise.resolve() and Promise.reject(). When this
// happens, the method returns a new promise that is called
// after the .then() function.


// A CONTROVERSIAL aspect of promises is the silent failure that
// happens wheen a promise is rejected without a rejection
// handler.  Errors can be silently swallowed, inadvertantly,
// and many consider it the greatest flaw in the EC6 specification.
//
// Node.js (and some browsers) handles this by emitting two
// events on the 'process' (or 'window') object:
//
// unhandledRejection
// and
// rejectionHandled
//
// These are designed to work together to identify promises
// that are rejected but unhandled.

// TIP: ALWAYS have a rejection handler at the end of any
// chain of promises.

// When chaining promises, each call to .then() creates
// and returns a new promise that is resolved when the previous
// one is resolved.  Such chains are used to pass values
// between a series of asynchrouous events.

// Two functions provide ways to handle multiple promises:
// Promise.all(arr) and Promise.race(arr)

// let p1 = new Promise(function(resolve, reject) {
//   resolve(1);
// });

// let p2 = new Promise(function(resolve, reject) {
//   resolve(2);
// })

// let p3 = Promise.all([p1, p2]);

// p3.then(function(val) {
//   Array.isArray(value) // true
//   value[0] // 1
//   value[1] // 2
// })

// // ----------------------------------------

// let pFastestResolvedPromise = Promise.resolve(42);

// let pFastestRejectedPromise = Promise.reject(43);

// let p4 = new Promise(function(resolve, reject) {
//   resolve(2);
// })

// let p5 = new Promise(function(resolve, reject) {
//   resolve(3);
// })

// let p6 = Promise.race([pFastestResolvedPromise, p4, p5]);

// p6.then(function(value) {
//   value // 42
// }).catch(function(value) {
//   value
// });

// let p7 = Promise.race([pFastestRejectedPromise, p4, p5]);
// let p7 = Promise.race([ p4, p5]);

// p7.then(function(value) {
//   value // undefined; not called
// }).catch(function(value) {
//   value // 43
// });


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

function funWithPromises() {
    return;
}

funWithPromises();

module.exports = funWithPromises;