// --- Directions

function funWithSets() {
	const mySet = new Set([2, 4]);
	console.log(mySet.has(2));
	console.log(mySet.has('2'));
	console.log(mySet.size);
	// mySet.clear();
	mySet.add('4');
	mySet.add('5');

	mySet.forEach(function(value) {
		console.log(value);
	})

	mySet.forEach(function(value, key, ownerSet) {
		console.log(key  + " : " + value);
		console.log(`${typeof key} ${typeof value}`);
		console.log(typeof key);
		console.log(Object.is(ownerSet, mySet));
	})

	// Sets can, by default, be the source of a memory leak
	// by holding references to objects that might be deleted
	// elsewhere.  At times you may want a set to only lightly
	// hold the final remaining reference to an object,
	// allowing garbage collection IF AND ONLY IF it is indeed
	// final reference.

	let persistent = {name: "persistent"};
	const leaky = new Set([persistent]);
	persistent = null;
	console.log([...leaky][0]); // yes, it's still around

	// For this purpose, we can create 'weak' Sets:
	// WeakSet cannot contain Strings, Numbers, NaN or other 
	// non-object items
	console.log("WEAK SETS - - - - ")

	let otherObj = {};
	const weakSet = new WeakSet([otherObj]);
	console.log(weakSet.has(otherObj));
	otherObj = null;
	console.log(weakSet.has(otherObj));
	// WeakSets ...
	// do not have a size property
	// are not iterable (don't have forEach(), keys(), values(), 
	// spread into array, etc.)
	// throw an error if one tries to add a non-object
}

funWithSets();

module.exports = funWithSets;