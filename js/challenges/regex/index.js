// --- Directions

function supportsRegExpU() {
	try {
		const pattern = new RegExp(".", "u");
		return true;
	} catch (ex) {
		return false;
	}
}

function supportsRegExpY() {
	try {
		const pattern = new RegExp(".", "y");
		return true;
	} catch (ex) {
		return false;
	}
}

function passthru(literals, ...substitutions) {
	console.log(literals);
	console.log(substitutions);
	let result = "";
	for (let i = 0; i < substitutions.length; i++) {
		result += literals[i];
		result += substitutions[i];
	}
	result += literals[literals.length - 1];
	return result;
}

function regexAndStrings() {
	let msg = "hello, world!";
	console.log(
		msg.startsWith("hello") &&
		msg.endsWith("!") &&
		msg.includes("o") &&
		!msg.includes("x") &&
		msg.startsWith("o", 4) &&
		msg.endsWith("w", 8)
	);

	console.log("Abc".repeat(3));

	let re = /Brian/iygu;
	console.log(re.source);
	console.log(re.flags)

	let word = 'multiline';
	console.log(`
		I
		am a ${word}
		template literal`);

	let count = 10,
		price = 0.25,
		message = passthru`Tag example: ${count} items cost $${(count * price).toFixed(2)}.
Also remember that template tags (functions) can implement DSLs.`;
	
	console.log(message);

	let messageWithEscapes = String.raw`Multiline\nstring`;
	console.log(messageWithEscapes);
}

regexAndStrings();

module.exports = regexAndStrings;