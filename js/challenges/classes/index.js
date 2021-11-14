// --- Directions

// EC5 way of doing "classes":
// constructor
function PersonType(name) {
	this.name = name;
}

PersonType.prototype.sayName = function() {
	console.log(this.name);
};


// EC6 is syntactically nice
// 1. class declarations are NOT hoisted
// 2. All code inside class declarations run in strict mode always
// 3. Methods in classes are non-enumerable
class PersonClass {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}

// Here's a direct equivalent of an EC6 class(!)
let PersonClass2 = (function() {
	"use strict";

	const PersonClass2 = function(name) {
		// make sure the function was called with "new"
		if (typeof new.target === 'undefined') {
			throw new Error("Constructor must be called with new.")
		}
		this.name = name;
	}

	Object.defineProperty(PersonClass2.prototype, "sayName", {
		value: function() {
			// make sure the target WASN'T called with "new"
			if (typeof new.target !== "undefined") {
				throw new Error("Method cannot be called with new.")
			}
			console.log(this.name);
		},
		enumerable: false,  // member functions aren't enumerable
		writable: true,
		configurable: true
	});
	return PersonClass2;
}());

function funWithClasses() {
	var person = new PersonType("Eddie");
	person.sayName();
	console.log(person instanceof PersonType);
	console.log(person instanceof Object);

	console.log(typeof PersonClass); // function!
}

funWithClasses();

module.exports = funWithClasses;