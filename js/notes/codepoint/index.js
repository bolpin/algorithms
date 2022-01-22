// --- Directions
// Consider a string of unicode characters
function is32Bit(ch) {
	return ch.codePointAt(0) > 0xFFFF;
}

function codepoint() {
	console.log(String.fromCodePoint(134071));
	console.log(String.fromCodePoint(55362));
	console.log(String.fromCodePoint(57271));
	console.log(String.fromCodePoint(97));
	let text = '𠮷a';
	console.log('Text with a unicode and an ascii character:')
	console.log(text);
	console.log('text.length:')
	console.log(text.length);
	console.log('/^.$/.test(text):')
	console.log(/^.$/.test(text));
	console.log("\nFor each of 0-2, charAt(), charCodeAt(), and codePointAt():")
	console.log('0 -----')
	console.log(text.charAt(0));
	console.log(text.charCodeAt(0));
	console.log(text.codePointAt(0));
	console.log('1 -----')
	console.log(text.charAt(1));
	console.log(text.charCodeAt(1));
	console.log(text.codePointAt(1));
	console.log('2 -----')
	console.log(text.charAt(2));
	console.log(text.charCodeAt(2));
	console.log(text.codePointAt(2));
	let text0 = '𠮷';
	console.log(is32Bit(text0));
	let text1 = 'a';
	console.log(is32Bit(text1));
	return;
}

codepoint();

module.exports = codepoint;