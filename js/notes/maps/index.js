// --- Directions

function funWithMaps() {
	const map = new Map();
	// map["a"] = 97; // DON'T do this
	map.set("a", 97);
	map.set("b", 98);
	console.log(map.has("a"));
	console.log(map.has("b"));
	console.log(map.size);
	console.log(map);
	console.log(map.get("a"));
	// map.delete("a");
	// map.clear();
	
	// get an array of [[key, value], [key2, value2]] pairs
	let foo = [...map];
	console.log(" ")
	console.log(foo);
	console.log(JSON.stringify({name: "Brian"}));

	// Example of using WeakMap as a non-memory-leaking
	// technique to store private instance data:
	let Person = (function() {
		let privateData = new WeakMap();

		function Person(name) {
			privateData.set(this, {name: name});
		}

		Person.prototype.getName = function() {
			return privateData.get(this).name;
		}
		
		return Person;
	})();
	let me = new Person("Brian");
	console.log(me);
	console.log(me.name);
	console.log(me.getName());
}

funWithMaps();

module.exports = funWithMaps;