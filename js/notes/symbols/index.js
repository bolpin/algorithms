// --- Directions
//

function symbolFun() {
	// ES5 primitives:
	// Strings, Numbers, Booleans, null, undefined

	// ES6 primitives:
	// [above 5] plus Symbols

	// Symbols do not have a literal form(!)

	 // it's nice, but not required, to give a hint as
	 // to the symbols meaning
	const attributeA = Symbol();
	const attributeB = Symbol('nickname'); 
	const person = {};
	person[attributeA] = 3.14159;
	person[attributeB] = "Smitty";
	console.log(person[attributeA]);
	console.log(person[attributeB]);
	console.log(typeof attributeA);
	console.log(Object.getOwnPropertySymbols(person));

	// Two ways to create symbol properties on an object:
	// 1. computed object literal
	let firstName = Symbol('first name');	
	let employee = {
		[firstName]: "Maria"
	}
	console.log(employee[firstName]);
	employee[firstName] = "Mary";
	console.log(employee[firstName]);
	Object.defineProperty(employee, firstName, {writable: false}); // can modify property like so
	employee[firstName] = "Maria";
	console.log(employee[firstName]);

	// 2. Object.defineProperties()
	let lastName = Symbol('last name');
	Object.defineProperties(employee, {
		[lastName]: {
			value: "Santos",
			writable: false
		}
	});


	// Sharing symbols
	// ES6 provides a global symbol registry
	let uid = Symbol.for('uid');
	let myObject = {
		[uid]: "1234"
	};
	let uid2 = Symbol.for('uid');
	console.log(myObject[uid]);
	console.log(uid === uid2);
	console.log(uid2);
	console.log(Object.getOwnPropertySymbols(myObject));

	// Well-known symbols
	// Note that these are equivalent:
	myObject instanceof Array;
	Array[Symbol.hasInstance](myObject);

	// We can define a function and limit whether objects can be considered
	// instances of it.  For example:
	function SpecialNumber() {
		// empty
	}

	Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
		value: function(v) {
			return (v instanceof Number) &&
				(v >= 1 && v <= 100);
		}
	});

	let two = new Number(2),
		zero = new Number(0);

	console.log(two instanceof SpecialNumber);
	console.log(zero instanceof SpecialNumber);

	// Defining Object String Tags
	function Person(name) {
		this.name = name;
	}
	console.log(Person.prototype[Symbol.toStringTag]);
	Person.prototype[Symbol.toStringTag] = "Person";
	Person.prototype.toString = function() {
		return this.name;
	}
	const me = new Person("Brian");
	console.log(me.toString());
	console.log(Person.prototype[Symbol.toStringTag]);
	console.log(Object.prototype.toString.call(me));

	// Why do we need Symbols?

	// Symbols are a new primitive type, useful to create
	// properties that can't be accessed without referencing the 
	// symbol.  While not truly private, these properties are
	// harder to accidentally change and are therefore useful
	// when a layer of protection from developer error is needed.

	// Note that Object.keys() and Object.getOwnPropertyNames() do
	// not return symbols, so a new method is available:
	// Object.getOwnPropertySymbols().

	// You can make changes to symbol properties by using
	// Object.defineProperty() and Object.defineProperties().

	// You can hack the standard behavior of objects by accessing
	// certain well-known symbols.  E.g. instanceof.
}

symbolFun();

module.exports = symbolFun;