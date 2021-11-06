// --- Directions

function createBike(wheels, gears) {
	// nice shorthand for properties in object literals:
	let seatType = "seat material";
	return {
		// wheels: wheels,  // verbose
		// gears: gears,
		wheels, 
		gears,
		// concise method shorthand
		// getModel: function() { return "Schwinn"; },
		getModel() { return "Schwinn"},
		// computed property names:
		[seatType]: "Gel"
	}
}


function objectFun() {
	const bike = createBike(2, 10);
	console.log(bike["gears"]);
	console.log(bike["seat material"]);

	// clarify equality using Object.is()
	// (returns true when type AND value match, in contrast to
	// == and ===)
	console.log(NaN == NaN);
	console.log(NaN === NaN);
	console.log(Object.is(NaN, NaN));

	console.log(5 == "5");
	console.log(5 === "5");
	console.log(Object.is(5, "5"));

	const targetObj = {
		description: "A boring object"
	}

	const nameSpeakerObj = {
		sayName() {
			console.log(`My name is ${this.name}.`)
		}
	}

	const anotherMixinObj = {
		saySomething() {
			console.log("I can now say things.");
		}
	}

	Object.assign( // Let's add some functionality (arbitrary # of mixins):
		targetObj, 
		nameSpeakerObj,
		anotherMixinObj,
		{
			name: "Speaker"
		}
	);
	targetObj.saySomething();
	targetObj.sayName();

}

objectFun();

module.exports = objectFun;