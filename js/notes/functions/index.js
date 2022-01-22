// --- Directions
function pick(object, ...keys) {
	let result = Object.create(null);

	for(let i = 0, len = keys.length; i < len; i++) {
		result[keys[i]] = object[keys[i]];	
	}
	return result;
}
function functionFun() {
	let brian = {
		name: 'Brian', 
		age: 'old',
		fun: 'yes'
	}
	console.log(pick(brian, 'name', 'fun'));

	// Did you know you could define a function like so?
	let addFunc = new Function("first", "second", "return first + second");
	console.log(addFunc(20, 1));

	// ECMAScript 5 requires 'apply'--and a 'this' binding--to call max on an array:
	const values = [3, 6, 43, 5, 2];
	console.log(Math.max.apply(Math, values));

	// ECMAScript 6 lets us spread the arguments:
	console.log(Math.max(...values));  // nicer

	// Did you know you can mix and match the spread operator with other
	// args as well?
	const moreValues = [-2, -6, -49]
	console.log(Math.max(...moreValues, -10)); // to specify a minimum that could be returned
	console.log(Math.max(...moreValues, 0)); // to specify a minimum that could be returned

	// Functions have a 'name' property
	const doSomething = function doSomethingElse() {
		return;
	}
	const person = {
		set firstName(n) {
			this.name = n;
		},
		get firstName() {
			return this.name || "Brian";
		},
		sayName: function() {
			console.log(this.name);
		}
	}
	console.log(doSomething.name);
	console.log(person.firstName.name);
	console.log(person.sayName.name);

	// ARROW Functions ...
	// ... don't have this, super, arguments or new.target bindings (these 
	//     are defined by the nearest containing non-arrow function)
	// ... cannot be called with 'new'
	// ... the prototype property of an arrow function doesn't exist
	// ... cannot have their 'this' changed
	// ... don't have an 'arguments' object (you must rely on named
	//     and rest parameters to access the arguments to the function)
	// ... cannot have duplicate named parameters, even in non-strict mode
	// AND, as a result, are less confusing and more optimizable by 
	// javascript engines.  Yay.

	// Harness tail-call optimization requirements:
	// 1. tail-call does not require access to variables in current stack frame
	// 2. function making tail-call has no further work to do after making
	//    the tail call
	// 3. the result of the tail-call is returned as the function value
	// {PRIMARY USE CASE: recursive functions}
	function factorial(n, p = 1) {
		if (n <= 1) {
			return 1 * p;
		} else {
			const result = n * p;

			// optimized (meets 3 requirements, above)
			return factorial(n - 1, result);
		}
	}
}

functionFun();

module.exports = functionFun;