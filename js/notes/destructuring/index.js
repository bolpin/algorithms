// --- Directions

const container = {
	
	node: {
		type: "droid",
		name: "R2D2"
	},
	otherNode: {
		type: "phone",
		name: "Brian's iPhone",
		previousYearPrices: [59.95, 55.45, 99.95]
	}
}

// ECMAScript 5
function setCookie5(name, value, options) {
	options = options || {};
	let secure = options.secure,
	    path = options.path;
		// ...
}

// ECMAScript 6
function setCookie6(name, value, {secure, path, domain, expires}) {
}

function destructuringFun() {
	// I. OBJECT destructuring

	// you can initialize
	let {node: {type, name}} = container;

	container.node.name = "C3-PO";
	console.log(container.node.name);
	console.log(`${name} is a ${type}`);

	// you can also assign existing variables (note parens
	// and optional default value, and optional change of
	// local variable name):
	({otherNode: {
		type,
		name: namedItem,
		price = 299.95,
	    previousYearPrices: [,,oldPrice]}
	} = container);

	console.log(`${namedItem} is a ${type}.  (We're not
	talking about ${name}.)  It costs ${price}. It used
	to cost ${oldPrice}.`);


	// II. ARRAY destructuring
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	// you can initialize
	let [ , , aColor]= colors;
	console.log(aColor);
	
	// or assign
	[aColor] = colors;
	console.log(aColor);

	// swap two variables
	let a = 'first', b = 'second';
	console.log(`${a} then ${b}`)
	console.log([a, b]);
	[a, b] = [b, a];  // use of a temporary array, then a destructure
	console.log(`${a} then ${b}`)



}

destructuringFun();

module.exports = destructuringFun;