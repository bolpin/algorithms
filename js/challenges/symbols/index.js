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
	})


	// Sharing symbols
	// ES6 provides a global symbol registry
	let uid = Symbol.for('uid');
	let object = {
		[uid]: "1234"
	};
	let uid2 = Symbol.for('uid');
	console.log(object[uid]);
	console.log(uid === uid2);
	console.log(uid2);

}

symbolFun();

module.exports = symbolFun;