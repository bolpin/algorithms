// --- Directions

function isIterable(obj) {
	return typeof obj[Symbol.iterator] === 'function';
}

// To create our own iterable objects, we need to define
// an iterator:
let customCollection = {
	items: [],
	*[Symbol.iterator]() {
		for (let item of this.items) {
			yield item;
		}
	}
}
// note: it is not possible for an arrow function to be
// a generator
const smallOddGenerator = function *(items) {
	for (let i = 0; i < items.length; i++) {
		// NOTE: the 'yield' keyword is a syntax error
		// anywhere except inside a generator function
		yield(items[i]);
	}
}

const o = {
	items: ["hi", "there"],

	*gen() { // an iterator can be an attribute
		for (let item of this.items) {
			yield(item);
		}
	}
}

class DelegatingGenerator {
	constructor() {
		return this.hybridIterator();
	}

	*numberIterator() {
		yield 1;
		yield 2;
		return 3;
		yield 4;
	}

	*colorIterator() {
		yield "blue";
		yield "green";
	}

	*hybridIterator() {
		// note the '*'!
		yield *this.numberIterator(); 
		yield * "ahem";
		yield * [new WeakMap(), 125];
		yield * new Set([8, 7, 6]);
		yield *this.colorIterator(); 
		yield true;
	}
}

function runTaskRunner(taskDef) {
	// create the iterator
	let task = taskDef();

	// do first task
	let result = task.next();

	// recursive function:
	const step = () => {
		if (!result.done) {
			result = task.next(result.value);
			step();
		}
	}

	// start processing the remaining tasks:
	step();
}

function fetchData() {
	return function(callback) {
		setTimeout(function() {
			callback(null, "some-data");
		}, 50);
	};
}

// see pages 161-164
function runAsyncTaskRunner(taskDef) {
	// create the iterator
	let task = taskDef();

	// do first task
	let result = task.next();

	// recursive function:
	const step = () => {
		if (!result.done) {
			if (typeof result.value === "function") {
				result.value(function(err, data) {
					if (err) {
						result = task.throw(err);
						return;
					}
					result = task.next(data);
					step();
				});
			} else {
				result = task.next(result.value);
				step();
			}
		}
	}

	// start processing the remaining tasks:
	step();
}

function funWithIterators() {
	const myGen = smallOddGenerator([1, 3, 6]);
	console.log(myGen.next());
	console.log(myGen.next());
	console.log(myGen.next());
	console.log(myGen.next());
	console.log(myGen.next());

	const objGen = o.gen();
	console.log(objGen.next());
	console.log(objGen.next());
	console.log(objGen.next());

	console.log(isIterable('a string'));
	console.log(isIterable([3,2,1]));
	console.log(isIterable(new Map()));
	console.log(isIterable(new Set()));
	console.log(isIterable(new WeakMap()));
	console.log(isIterable(new WeakSet()));

	customCollection.items = [3, 4, 5];
	for (let x of customCollection) {
		console.log(x);
	}

	console.log("\n\nA delegating generator:")
	let hybrid = new DelegatingGenerator();
	let done = false;
	while(!done) {
		const val = hybrid.next();
		done = val.done;
		console.log(val);
	}

	console.log("\n\nSimple task runner example:");
	// a function that takes an anonymous generator argument
	runTaskRunner(function*(){
		let value = yield 1;
		console.log(value);

		value = yield value + 3;
		console.log(value);

		value = yield value * 2;
		console.log(value);
	})


	
}

funWithIterators();

module.exports = funWithIterators;